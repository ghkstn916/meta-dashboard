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

function SubProjectList({ children, parentUrl }: { children: SubProject[]; parentUrl?: string }) {
  return (
    <div className="mt-3 space-y-1.5">
      {children.map((child) => {
        const href = child.url || parentUrl;
        return (
          <a
            key={child.id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#0f111a]/60 hover:bg-[#2a2d4e] transition group"
          >
            <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="min-w-0 flex-1">
              <div className="text-sm text-slate-300 group-hover:text-white transition truncate">
                {child.name}
              </div>
              <div className="text-xs text-slate-500 truncate">{child.desc}</div>
            </div>
            {href && (
              <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 shrink-0 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            )}
          </a>
        );
      })}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const tc = techColors[project.tech] || defaultTech;
  const sc = statusConfig[project.status];
  const hasChildren = project.children && project.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setExpanded(!expanded);
    } else if (project.url) {
      window.open(project.url, "_blank");
    } else if (project.github) {
      window.open(project.github, "_blank");
    }
  };

  return (
    <div
      className={`bg-[#1a1d2e] border border-[#2a2d3e] rounded-2xl p-5 transition-all relative overflow-hidden border-t-[3px] ${tc.accent} hover:bg-[#222640] hover:-translate-y-0.5 hover:shadow-2xl ${hasChildren || project.url || project.github ? "cursor-pointer" : ""}`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          {hasChildren && (
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform ${expanded ? "rotate-90" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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

      {hasChildren && expanded && (
        <SubProjectList children={project.children!} parentUrl={project.url} />
      )}

      {hasChildren && (
        <div className="mt-2 text-xs text-slate-500">
          {expanded ? "" : `하위 프로젝트 ${project.children!.length}개`}
        </div>
      )}
    </div>
  );
}

export default function Dashboard({ projects }: { projects: Project[] }) {
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
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
