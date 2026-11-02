// Progresso do Treinamento, guardado só neste navegador (localStorage).
// É uma conveniência de quem lê: sem localStorage (aba anônima, bloqueio),
// a página funciona igual, só não lembra o que foi concluído.
//
// Marcações no HTML:
//   [data-lesson-row="<slug>"]      linha de aula: recebe data-done
//   [data-lesson-toggle="<slug>"]   botão "Marcar como concluída"
//   [data-progress='[{slug,href,title}]']  bloco com contagem e barra:
//      [data-progress-count]  "3 de 9"
//      [data-progress-bar]    barra (largura em %)
//      [data-progress-next]   link "Continuar" → primeira aula não concluída

const KEY = "eu-imob:treinamento:v2";
const EVENT = "eu-imob:progresso";

interface LessonRef {
  slug: string;
  href: string;
  title: string;
}

function read(): Set<string> {
  try {
    const raw = localStorage.getItem(KEY);
    const list = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(list) ? list.filter((s) => typeof s === "string") : []);
  } catch {
    return new Set();
  }
}

function write(done: Set<string>) {
  try {
    localStorage.setItem(KEY, JSON.stringify([...done]));
  } catch {
    // Sem armazenamento: o estado vale só até recarregar a página.
  }
}

let memory: Set<string> | null = null;
const current = () => (memory ??= read());

function setDone(slug: string, done: boolean) {
  const set = current();
  if (done) set.add(slug);
  else set.delete(slug);
  write(set);
  document.dispatchEvent(new CustomEvent(EVENT));
}

function render() {
  const done = current();

  document.querySelectorAll<HTMLElement>("[data-lesson-row]").forEach((row) => {
    row.toggleAttribute("data-done", done.has(row.dataset.lessonRow!));
  });

  document.querySelectorAll<HTMLButtonElement>("[data-lesson-toggle]").forEach((button) => {
    const isDone = done.has(button.dataset.lessonToggle!);
    button.setAttribute("aria-pressed", String(isDone));
    const label = button.querySelector("[data-label]");
    if (label) label.textContent = isDone ? "Aula concluída" : "Marcar como concluída";
  });

  document.querySelectorAll<HTMLElement>("[data-progress]").forEach((block) => {
    let lessons: LessonRef[] = [];
    try {
      lessons = JSON.parse(block.dataset.progress ?? "[]");
    } catch {
      return;
    }
    const total = lessons.length;
    const count = lessons.filter((l) => done.has(l.slug)).length;
    const pct = total ? Math.round((count / total) * 100) : 0;

    block.toggleAttribute("data-started", count > 0);
    block.toggleAttribute("data-complete", total > 0 && count === total);
    block.style.setProperty("--progress", `${pct}%`);

    block.querySelectorAll("[data-progress-count]").forEach((el) => {
      el.textContent = `${count} de ${total}`;
    });
    block.querySelectorAll<HTMLElement>("[data-progress-bar]").forEach((bar) => {
      bar.setAttribute("aria-valuenow", String(pct));
      bar.setAttribute("aria-valuetext", `${count} de ${total} aulas concluídas`);
    });
    const next = lessons.find((l) => !done.has(l.slug));
    block.querySelectorAll<HTMLAnchorElement>("[data-progress-next]").forEach((link) => {
      const label = link.querySelector("[data-label]");
      if (next) {
        link.href = next.href;
        if (label) label.textContent = count > 0 ? `Continuar: ${next.title}` : (link.dataset.startLabel ?? "Começar");
      } else if (label) {
        label.textContent = link.dataset.doneLabel ?? "Rever desde o início";
      }
    });
  });
}

document.addEventListener("click", (event) => {
  const button = (event.target as Element | null)?.closest<HTMLButtonElement>("[data-lesson-toggle]");
  if (!button) return;
  setDone(button.dataset.lessonToggle!, button.getAttribute("aria-pressed") !== "true");
});

window.addEventListener("storage", (event) => {
  if (event.key !== KEY) return;
  memory = null;
  render();
});

document.addEventListener(EVENT, render);
render();
