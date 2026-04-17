export interface Project {
  id: string;
  name: string;
  desc: string;
  tech: string;
  tags: string[];
  url?: string;
  github?: string;
  status: "active" | "paused" | "done";
  children?: SubProject[];
}

export interface SubProject {
  id: string;
  name: string;
  desc: string;
  tech?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "online_judge",
    name: "Online Judge",
    desc: "Next.js 기반 온라인 저지(코딩 채점) 시스템",
    tech: "Next.js",
    tags: ["웹", "교육", "코딩"],
    url: "https://online-judge-xi.vercel.app",
    github: "https://github.com/ghkstn916/online_judge",
    status: "active",
  },
  {
    id: "hyehwa_lecture",
    name: "혜화 수업자료",
    desc: "혜화 수업 자료 및 학생 평가 도구 모음 (AI, 정보 교과)",
    tech: "HTML",
    tags: ["교육", "수업", "AI"],
    url: "https://hyehwalecture.vercel.app",
    github: "https://github.com/ghkstn916/hyehwa_lecture",
    status: "active",
    children: [
      { id: "3-5homepage", name: "3-5 홈페이지", desc: "3학년 5반 학급 홈페이지", tech: "React", url: "https://3-5homepage.vercel.app" },
      { id: "student-eval", name: "학생 평가", desc: "학생 평가 도구", tech: "React", url: "https://student-eval-tau.vercel.app" },
      { id: "lesson-2026ai_ch1_2", name: "AI 1-2장", desc: "2026 AI 교과 1-2장 수업자료", tech: "React", url: "https://lesson-2026aich12.vercel.app" },
      { id: "lesson-2026ai_ch2_1", name: "AI 2-1장", desc: "2026 AI 교과 2-1장 수업자료", tech: "React", url: "https://lesson-2026aich21.vercel.app" },
      { id: "lesson-2026ai_ch2_2", name: "AI 2-2장", desc: "2026 AI 교과 2-2장 수업자료", tech: "React", url: "https://lesson-2026aich22.vercel.app" },
      { id: "lesson-2026infor_ch1", name: "정보 1장", desc: "2026 정보 교과 1장 수업자료", tech: "React", url: "https://lesson-2026inforch1.vercel.app" },
      { id: "lesson-2026infor_ch2", name: "정보 2장", desc: "2026 정보 교과 2장 수업자료", tech: "React", url: "https://lesson-2026inforch2.vercel.app" },
      { id: "lesson-2026infor_ch3", name: "정보 3장", desc: "2026 정보 교과 3장 수업자료", tech: "React", url: "https://lesson-2026inforch3.vercel.app" },
      { id: "lesson-tokenizer", name: "토크나이저", desc: "토크나이저 실습 수업자료", tech: "React", url: "https://lesson-tokenizer.vercel.app" },
      { id: "lesson-turing-test", name: "튜링 테스트", desc: "튜링 테스트 수업자료", tech: "React", url: "https://lesson-turing-test.vercel.app" },
      { id: "lesson-word-embedding", name: "워드 임베딩", desc: "워드 임베딩 수업자료", tech: "React", url: "https://lesson-word-embedding.vercel.app" },
      { id: "claude-install-guide", name: "Claude 설치 가이드", desc: "Claude Code 설치 안내", tech: "HTML", url: "https://claude-install-guide.vercel.app" },
    ],
  },
  {
    id: "exam_schedule_app",
    name: "모의고사 시간표",
    desc: "Android 모의고사 시간표 앱",
    tech: "Android",
    tags: ["앱", "교육", "시간표"],
    github: "https://github.com/ghkstn916/ExamScheduleApp",
    status: "active",
  },
  {
    id: "ai-society",
    name: "AI 사회",
    desc: "AI 사회 관련 React 웹 프로젝트",
    tech: "React",
    tags: ["웹", "AI", "사회"],
    github: "https://github.com/ghkstn916/ai-society",
    status: "paused",
  },
  {
    id: "digital-society-2",
    name: "디지털 사회 2",
    desc: "디지털 사회 수업용 React 웹 프로젝트",
    tech: "React",
    tags: ["웹", "교육", "디지털"],
    github: "https://github.com/ghkstn916/digital-society-2",
    status: "paused",
  },
  {
    id: "hyehwa_datalab",
    name: "hyehwa_datalab",
    desc: "혜화 데이터 리터러시",
    tech: "React",
    tags: ["웹", "교육", "데이터"],
    url: "https://ghkstn916.github.io/hyehwa-datalab/",
    github: "https://github.com/ghkstn916/hyehwa-datalab",
    status: "active",
  },
  {
    id: "teacher_prompt_cards",
    name: "선생님 프롬프트 카드",
    desc: "Claude Code 입문 가이드(설치·로그인·첫 프로젝트) + 8과목(국·수·영·과·사·미술·특수·공통) 프롬프트 카드 모음",
    tech: "HTML",
    tags: ["연수", "교사", "입문", "프롬프트"],
    url: "https://teacherpromptcards.vercel.app",
    status: "active",
  },
  {
    id: "teacher_gallery",
    name: "선생님 갤러리",
    desc: "혜화여고 선생님들이 Claude Code로 만든 작품들을 모아놓는 갤러리 사이트",
    tech: "Next.js",
    tags: ["연수", "교사", "갤러리"],
    url: "https://teachergallery.vercel.app",
    status: "active",
  },
  {
    id: "my-notion",
    name: "my-notion",
    desc: "노션 스타일 개인 메모 앱 (웹 PWA + Expo 안드로이드 앱 동시 제공, Supabase 백엔드)",
    tech: "Next.js + Expo",
    tags: ["웹", "앱", "메모", "PWA", "안드로이드"],
    url: "https://my-notion-drab.vercel.app",
    github: "https://github.com/ghkstn916/my-notion",
    status: "active",
  },
];
