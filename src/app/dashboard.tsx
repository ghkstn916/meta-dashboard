"use client";

import { useState } from "react";
import type { Project, SubProject } from "@/lib/projects";

const techColors: Record<string, { bg: string; text: string; accent: string }> = {
  React:    { bg: "bg-blue-400/15", text: "text-blue-400", accent: "border-t-blue-400" },
  "Next.js": { bg: "bg-white/10", text: "text-slate-200", accent: "border-t-slate-200" },
  Vite:     { bg: "bg-purple-400/15", text: "text-purple-400", accent: "border-t-purple-400" },
  Android:  { bg: "bg-emerald-400/15", text: "text-emerald-400", accent: "border-t-emerald-400" },
  HTML:     { bg: "bg-yellow-400/15", text: "text-yellow-400", accent: "border-t-yellow-400" },
  Python:   { bg: "bg-blue-400/15", text: "text-blue-400", accent: "border-t-blue-400" },
};

const defaultTech = { bg: "bg-purple-400/15", text: "text-purple-400", accent: "border-t-purple-500" };

const statusConfig = {
  active: { label: "진행중", dot: "bg-emerald-400" },
  paused: { label: "보류", dot: "bg-yellow-400" },
  done:   { label: "완료", dot: "bg-slate-400" },
};

function SubCard({ child }: { child: SubProject }) {
  const tc = techColors[child.tech || ""] || defaultTech;
  return (
    <a
      href={child.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-[#1a1d2e] border border-[#2a2d3e] rounded-2xl p-5 transition-all relative overflow-hidden border-t-[3px] ${tc.accent} hover:bg-[#222640] hover:-translate-y-0.5 hover:shadow-2xl cursor-pointer block`}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-white">{child.name}</h3>
        {child.tech && (
          <span className={`text-[0.7rem] px-2.5 py-0.5 rounded-full font-semibold ${tc.bg} ${tc.text}`}>
            {child.tech}
          </span>
        )}
      </div>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">{child.desc}</p>
      {child.url && (
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span className="truncate">{child.url.replace("https://", "")}</span>
        </div>
      )}
    </a>
  );
}

/* Sub-project card grid (shown when a folder project is opened) */
function SubProjectGrid({ children, onBack, parentName }: { children: SubProject[]; onBack: () => void; parentName: string }) {
  const hasGroups = children.some((c) => c.group);
  const groups = new Map<string, SubProject[]>();
  if (hasGroups) {
    for (const c of children) {
      const key = c.group || "기타";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(c);
    }
  }

  return (
    <div className="min-h-screen bg-[#0f111a] text-slate-200 p-6 md:p-10">
      <header className="text-center mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-4 text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          전체 프로젝트로 돌아가기
        </button>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">
          {parentName}
        </h1>
        <p className="text-slate-400 text-sm">하위 프로젝트 {children.length}개</p>
      </header>

      {hasGroups ? (
        <div className="max-w-[1200px] mx-auto space-y-10">
          {Array.from(groups.entries()).map(([groupName, items]) => (
            <section key={groupName}>
              <div className="flex items-baseline gap-3 mb-4 border-b border-[#2a2d3e] pb-2">
                <h2 className="text-xl font-semibold text-white">{groupName}</h2>
                <span className="text-xs text-slate-500">{items.length}개</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {items.map((child) => (
                  <SubCard key={child.id} child={child} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-[1200px] mx-auto">
          {children.map((child) => (
            <SubCard key={child.id} child={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, onOpenFolder }: { project: Project; onOpenFolder: (p: Project) => void }) {
  const tc = techColors[project.tech] || defaultTech;
  const sc = statusConfig[project.status];
  const hasChildren = project.children && project.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      onOpenFolder(project);
    } else if (project.url) {
      window.open(project.url, "_blank");
    } else if (project.github) {
      window.open(project.github, "_blank");
    }
  };

  return (
    <div
      className={`bg-[#1a1d2e] border border-[#2a2d3e] rounded-2xl p-5 transition-all relative overflow-hidden border-t-[3px] ${tc.accent} hover:bg-[#222640] hover:-translate-y-0.5 hover:shadow-2xl cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          {hasChildren && (
            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          )}
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        </div>
        <span className={`text-[0.7rem] px-2.5 py-0.5 rounded-full font-semibold ${tc.bg} ${tc.text}`}>
          {project.tech}
        </span>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-3">{project.desc}</p>

      <div className="flex items-center gap-3 text-xs text-slate-500 flex-wrap">
        <span className="flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${sc.dot}`} />
          {sc.label}
        </span>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="hover:text-purple-400 transition"
          >
            웹사이트
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>
        )}
      </div>

      <div className="flex gap-1.5 mt-2 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.7rem] px-2 py-0.5 rounded-md bg-purple-500/15 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {hasChildren && (
        <div className="mt-2 text-xs text-slate-500">
          하위 프로젝트 {project.children!.length}개
        </div>
      )}
    </div>
  );
}

export default function Dashboard({ projects }: { projects: Project[] }) {
  const [openFolder, setOpenFolder] = useState<Project | null>(null);

  const total = projects.length;
  const active = projects.filter((p) => p.status === "active").length;
  const paused = projects.filter((p) => p.status === "paused").length;
  const done = projects.filter((p) => p.status === "done").length;

  const [filter, setFilter] = useState<"all" | "active" | "paused" | "done">("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.status === filter);

  const filters = [
    { key: "all" as const, label: "전체" },
    { key: "active" as const, label: "진행중" },
    { key: "paused" as const, label: "보류" },
    { key: "done" as const, label: "완료" },
  ];

  if (openFolder && openFolder.children) {
    return (
      <SubProjectGrid
        children={openFolder.children}
        parentName={openFolder.name}
        onBack={() => setOpenFolder(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0f111a] text-slate-200 p-6 md:p-10">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">
          Project Dashboard
        </h1>
        <p className="text-slate-400 text-sm">프로젝트 한눈에 보기</p>
      </header>

      {/* Stats */}
      <div className="flex gap-3 justify-center flex-wrap mb-8">
        {[
          { n: total, label: "전체", color: "text-purple-300" },
          { n: active, label: "진행중", color: "text-emerald-400" },
          { n: paused, label: "보류", color: "text-yellow-400" },
          { n: done, label: "완료", color: "text-blue-400" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-[#1a1d2e] border border-[#2a2d3e] rounded-xl px-5 py-3 text-center min-w-[120px]"
          >
            <div className={`text-2xl font-bold ${s.color}`}>{s.n}</div>
            <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-2 justify-center flex-wrap mb-8">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-1.5 rounded-full text-sm border transition ${
              filter === f.key
                ? "bg-purple-600 text-white border-purple-600"
                : "border-[#2a2d3e] text-slate-400 hover:bg-purple-600 hover:text-white hover:border-purple-600"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-[1200px] mx-auto">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} onOpenFolder={setOpenFolder} />
        ))}
      </div>
    </div>
  );
}
