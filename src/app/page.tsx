import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Server,
  Sparkles,
  Terminal,
  type LucideIcon,
} from "lucide-react";

const stack: [string, LucideIcon][] = [
  ["React.js", Atom],
  ["Next.js", Layers],
  ["Python", Terminal],
  ["Django", Server],
  ["AI/ML", BrainCircuit],
  ["Data Science", Database],
  ["Generative AI", Sparkles],
  ["SQL", Braces],
];

const paths = [
  {
    href: "/training",
    icon: GraduationCap,
    color: "blue",
    title: "Training & Teaching",
    tag: "Learn. Practice. Build. Get job ready.",
    text: "Hands-on training in the technologies top companies use, designed by industry experts.",
    cta: "Explore training",
  },
  {
    href: "/projects",
    icon: Code2,
    color: "violet",
    title: "Project Development",
    tag: "Choose. Understand. Develop.",
    text: "Turn your idea into a working B.Tech or M.Tech project with full source code, API integration and architecture support.",
    cta: "Explore projects",
  },
] as const;

const courses = [
  {
    slug: "python-full-stack",
    title: "Python Full Stack Development",
    text: "Build complete web apps with Python, Django, React and databases.",
    tags: ["Python", "Django", "React", "REST API", "SQL"],
    icon: Terminal,
  },
  {
    slug: "nextjs-full-stack",
    title: "Next.js Full Stack Development",
    text: "Ship production-ready apps with Next.js, React, TypeScript and databases.",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "SQL"],
    icon: Layers,
  },
];

const accent = {
  blue: {
    icon: "bg-blue-50 text-blue-600 ring-blue-100",
    link: "text-blue-600",
    hover: "hover:border-blue-300 hover:shadow-blue-500/10",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600 ring-violet-100",
    link: "text-violet-600",
    hover: "hover:border-violet-300 hover:shadow-violet-500/10",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pb-32 pt-28 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 h-120 w-225 -translate-x-1/2 bg-linear-to-br from-blue-500 via-violet-600 to-transparent opacity-20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 mask-[linear-gradient(180deg,white,transparent)]" />

        <div className="container relative mx-auto max-w-4xl px-4">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-blue-300 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            B.Tech & M.Tech project development platform
          </span>

          <h1 className="mb-6 bg-linear-to-r from-white via-blue-100 to-violet-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
            Build your project.
            <br />
            Build your skills.
            <br />
            Build your future.
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-slate-300 md:text-xl">
            Learn, build and demonstrate real software projects, with complete
            source code and architecture.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-violet-500 sm:w-auto"
            >
              Explore projects{" "}
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/training"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
            >
              Join training
            </Link>
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="bg-white py-24">
        <div className="container mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-2">
          {paths.map(({ href, icon: Icon, color, title, tag, text, cta }) => {
            const a = accent[color];
            return (
              <Link
                key={href}
                href={href}
                className={`group flex flex-col items-center rounded-3xl border border-slate-200 p-10 text-center shadow-xl shadow-slate-200/30 transition duration-300 ${a.hover}`}
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ${a.icon}`}
                >
                  <Icon className="h-8 w-8" strokeWidth={1.75} />
                </div>
                <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                  {title}
                </h2>
                <p className={`mb-5 text-sm font-semibold ${a.link}`}>{tag}</p>
                <p className="mb-8 leading-relaxed text-slate-500">{text}</p>
                <span
                  className={`mt-auto inline-flex items-center gap-2 font-bold ${a.link}`}
                >
                  {cta}{" "}
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Training */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Learn. Build. Become job ready.
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Practical full-stack training built around real projects and
              modern tools.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {courses.map(({ slug, title, text, tags, icon: Icon }) => (
              <article
                key={slug}
                className="flex flex-col rounded-2xl border border-slate-700 bg-slate-800 p-8 transition-colors hover:border-blue-500"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">{title}</h3>
                <p className="mb-6 text-sm text-slate-400">{text}</p>
                <ul className="mb-8 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-slate-700/70 px-2 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/training/${slug}`}
                  className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 py-3 font-medium transition-colors hover:bg-blue-500"
                >
                  View course <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/training"
              className="inline-flex items-center gap-2 font-medium text-blue-400 hover:text-blue-300"
            >
              View all training <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
