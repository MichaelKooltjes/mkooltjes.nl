// ====== EDIT THESE FIRST ======
const LINKS = {
  github: "https://github.com/yourname",
  linkedin: "#", // set later to https://www.linkedin.com/in/yourname/
  email: "you@mkooltjes.nl",
};

// Replace placeholders with real projects over time.
const PROJECTS = [
  {
    title: "C Tooling Project (Placeholder)",
    meta: "C • CLI • performance",
    description:
      "A programming-focused project in C. Replace this with your real project: what it does, why it matters, and the outcome.",
    tags: ["C", "CLI", "Algorithms"],
    links: {
      code: "#",
      demo: "#",
      writeup: "#",
    },
    badge: "Featured",
  },
  {
    title: "C# App / Utility (Placeholder)",
    meta: "C# • desktop • UX",
    description:
      "A small C# application or tool. Replace with your project and what you learned (architecture, UI, testing, etc.).",
    tags: ["C#", ".NET", "Tooling"],
    links: {
      code: "#",
      demo: "#",
    },
    badge: "C#",
  },
  {
    title: "Python Data / Automation (Placeholder)",
    meta: "Python • data • automation",
    description:
      "A Python project that processes data or automates something useful. Replace with results (speed, accuracy, usefulness).",
    tags: ["Python", "Data", "Automation"],
    links: {
      code: "#",
      results: "#",
    },
    badge: "Python",
  },
];

// ====== DO NOT TOUCH BELOW (unless you want to) ======
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  PROJECTS.forEach((p) => {
    const card = el("div", "card proj");

    const top = el("div", "proj-top");
    const left = el("div");
    left.appendChild(el("h3", "", p.title));
    left.appendChild(el("div", "meta", p.meta));

    top.appendChild(left);

    if (p.badge) {
      top.appendChild(el("span", "badge", p.badge));
    }

    card.appendChild(top);
    card.appendChild(el("p", "muted", p.description));

    const tags = el("div", "tags");
    (p.tags || []).forEach((t) => tags.appendChild(el("span", "tag", t)));
    card.appendChild(tags);

    const links = el("div", "proj-links");
    const linkEntries = Object.entries(p.links || {});
    linkEntries.forEach(([label, href]) => {
      const a = document.createElement("a");
      a.textContent = label.toUpperCase();
      a.href = href;
      a.target = "_blank";
      a.rel = "noreferrer";
      links.appendChild(a);
    });

    card.appendChild(links);
    grid.appendChild(card);
  });
}

function wireLinks() {
  const ln1 = document.getElementById("linkedinLink");
  const ln2 = document.getElementById("linkedinLink2");
  if (ln1) ln1.href = LINKS.linkedin;
  if (ln2) ln2.href = LINKS.linkedin;

  // Optional: if you want email to auto-update in one place later, we can wire that too.
}

function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

renderProjects();
wireLinks();
setYear();
