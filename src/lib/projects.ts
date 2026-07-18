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
  group?: string;
}

export const projects: Project[] = [
  {
    id: "online_judge",
    name: "코딩교실",
    desc: "단계별 미션, 실시간 퀴즈, 코드 연습장, 과제 제출 기능을 갖춘 코딩 학습 플랫폼",
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
      { id: "lesson-2026ai_ch1_2", name: "AI 1-2장", desc: "2026 AI 교과 1-2장 수업자료", tech: "React", url: "https://lesson-2026aich12.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch2_1", name: "AI 2-1장", desc: "2026 AI 교과 2-1장 수업자료", tech: "React", url: "https://lesson-2026aich21.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch2_2", name: "AI 2-2장", desc: "2026 AI 교과 2-2장 수업자료", tech: "React", url: "https://lesson-2026aich22.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch3_1", name: "AI 3-1장", desc: "2026 AI 교과 3-1장 — 데이터 속성 탐색(EDA)", tech: "React", url: "https://hyehwa-lesson-2026aich31.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch3_2", name: "AI 3-2장", desc: "2026 AI 교과 3-2장 — 붓꽃 산점도 시각화", tech: "React", url: "https://hyehwa-lesson-2026aich32.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch3_3", name: "AI 3-3장", desc: "2026 AI 교과 3-3장 — 이미지 임베딩 체험", tech: "React", url: "https://hyehwa-lesson-2026aich33.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch3_4", name: "AI 3-4장", desc: "2026 AI 교과 3-4장 — k-NN 분류 시각 실험", tech: "React", url: "https://hyehwa-lesson-2026aich34.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch3_5", name: "AI 3-5장", desc: "2026 AI 교과 3-5장 — MobileNet 분류 수행평가", tech: "React", url: "https://hyehwa-lesson-2026aich35.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch3_games", name: "AI 체험 게임 (학생용)", desc: "AI 기초 1학기 후반부 12차시 — 지도학습부터 RAG·에이전틱 AI까지 (고3, 각 50분)", tech: "React", url: "https://lesson-2026aich3games.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch3_assess", name: "수행평가 (교사용·비공개)", desc: "AI 기초 수행평가 2회 — 프롬프트 설계 + 에이전틱 AI 미니 프로젝트 (학생 비공개)", tech: "React", url: "https://lesson-2026aich3assess.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch3_playground", name: "AI Playground (학생 실습)", desc: "Claude API 직접 호출 5종 실습 — 프롬프트 4요소 분석/4기법 비교/페르소나/환각 실험", tech: "React", url: "https://lesson-2026aich3playground.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch3_api", name: "API 백엔드 (Playground·Arcade용)", desc: "Claude API 키 안전 보관 + 학생 프록시 + 레이트 리밋 + 게임 채점(judge/duel). Next.js Vercel.", tech: "Next.js", url: "https://lesson-2026aich3api.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch3_arcade", name: "🎮 AI Arcade (학생 자율 게임)", desc: "5개 미니 게임으로 AI를 게임처럼 — 프롬프트 퍼즐·RPG·캐릭터 콜로세움·환각 탐정·프롬프트 배틀. 학생 자율학습/과제용.", tech: "React", url: "https://lesson-2026aich3arcade.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026ai_ch4_ai_challenge", name: "AI 챌린지 6차시 (생성형+에이전틱)", desc: "고3 AI 기초 6차시(PRD v1.1) — 워밍업·시각화·이미지(GPT Image 2)·도구(멀티턴)·리액트(기획서)·프로젝트(조 토론·코멘트·베스트 작품 포트폴리오). 수행평가 프로젝트 70%+포트폴리오 30%. 학생: /join에서 학번+API키 / 교사: /teacher", tech: "React+Supabase", url: "https://lesson-2026aich4aichallenge.vercel.app", group: "인공지능 기초" },
      { id: "lesson-2026aibasic", name: "인공지능 기초 48차시 (2026-2)", desc: "정보 이수 학생 대상 2학기 정규 48차시 전체 — 미래엔 교과서 4개 단원 웹 실습형(11모듈·48레슨, Colab 노트북 9종 내장, 수행평가 100%). 교사: /admin", tech: "React+Supabase", url: "https://lesson-2026aibasic.vercel.app", group: "인공지능 기초(2026-2 웹실습)" },
      { id: "lesson-2026infor_ch1", name: "정보 1장", desc: "2026 정보 교과 1장 수업자료", tech: "React", url: "https://lesson-2026inforch1.vercel.app", group: "정보 수업" },
      { id: "lesson-2026infor_ch2", name: "정보 2장", desc: "2026 정보 교과 2장 수업자료", tech: "React", url: "https://lesson-2026inforch2.vercel.app", group: "정보 수업" },
      { id: "lesson-2026infor_ch3", name: "정보 3장", desc: "2026 정보 교과 3장 수업자료", tech: "React", url: "https://lesson-2026inforch3.vercel.app", group: "정보 수업" },
      { id: "3-5homepage", name: "3-5 홈페이지", desc: "3학년 5반 학급 홈페이지", tech: "React", url: "https://3-5homepage.vercel.app", group: "기타" },
      { id: "student-eval", name: "학생 평가", desc: "학생 평가 도구", tech: "React", url: "https://student-eval-tau.vercel.app", group: "기타" },
      { id: "lesson-tokenizer", name: "토크나이저", desc: "토크나이저 실습 수업자료", tech: "React", url: "https://lesson-tokenizer.vercel.app", group: "기타" },
      { id: "lesson-turing-test", name: "튜링 테스트", desc: "튜링 테스트 수업자료", tech: "React", url: "https://lesson-turing-test.vercel.app", group: "기타" },
      { id: "lesson-word-embedding", name: "워드 임베딩", desc: "워드 임베딩 수업자료", tech: "React", url: "https://lesson-word-embedding.vercel.app", group: "기타" },
      { id: "claude-install-guide", name: "Claude 설치 가이드", desc: "Claude Code 설치 안내", tech: "HTML", url: "https://claude-install-guide.vercel.app", group: "기타" },
    ],
  },
  {
    id: "exam_schedule_app",
    name: "모의고사 시간표 전광판",
    desc: "교실 전광판용 Android 앱 + 관리 웹앱. 학년별 시간표·필적확인란·학교코드(관리자)와 반별 응원문구·공지(담임)를 웹에서 고치면 교실 화면이 실시간 반영 (Supabase 백엔드, 오프라인 폴백)",
    tech: "Android + Next.js + Supabase",
    tags: ["앱", "웹", "교육", "시간표", "전광판"],
    url: "https://examboard-admin.vercel.app",
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
    id: "hyehwa_explorer",
    name: "혜화 탐험",
    desc: "2026 교실배치도로 만든 교내 탐방 웹 게임 — 본관 5개 층·별관·체육관을 돌아다니며 스탬프 12개 모으기 (방향키/터치 이동, 층간 계단 이동)",
    tech: "HTML",
    tags: ["게임", "학생", "학교안내", "Canvas"],
    url: "https://hyehwa-explorer.vercel.app",
    status: "active",
  },
  {
    id: "teacher_api_lab",
    name: "선생님 API 입문 & 실습",
    desc: "API 개념 + 키 두 종류(데이터/서비스) 설명 + 8개 실습(강아지·이름→나이·공휴일·날씨·환율·국가·NEIS 급식·Claude 챗봇)을 브라우저에서 바로 호출하는 교사 연수 페이지",
    tech: "HTML",
    tags: ["연수", "교사", "API", "실습", "Claude"],
    url: "https://teacherapilab.vercel.app",
    github: "https://github.com/ghkstn916/teacher_api_lab",
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
  {
    id: "2026_grade3_univ",
    name: "수시 입시 일정 관리",
    desc: "고3 담임과 우리 반 학생 29명이 함께 쓰는 수시 입시 일정 관리 웹앱 — 공통 일정·NEIS 학사일정·개인 지원 대학 일정을 캘린더로, 수시 6장 카운터와 교사 대시보드 제공",
    tech: "Next.js + Supabase",
    tags: ["웹", "교육", "입시", "고3", "모바일"],
    url: "https://2026grade3univ.vercel.app",
    github: "https://github.com/ghkstn916/2026_grade3_univ",
    status: "active",
  },
  {
    id: "saengbu_writer",
    name: "생기부 기재 도우미",
    desc: "학생 활동 메모 → 2026 기재요령(진로 500자·행특 300자 등 규정 내장)에 맞는 생기부 서술형 초안 생성. 초안 2개 비교·다듬기·학생별 저장, 엑셀 붙여넣기 일괄 생성, 글자수 게이지·금지어 검사. Claude/OpenAI 키 직접 입력(브라우저에만 저장)",
    tech: "HTML",
    tags: ["AI", "교육", "교사용", "생기부", "고3"],
    url: "https://saengbu-writer.vercel.app",
    github: "https://github.com/ghkstn916/saengbu-writer",
    status: "active",
  },
  {
    id: "saengbu_analyzer",
    name: "학생부 분석기",
    desc: "학생부 PDF 업로드 → AI(Claude/GPT/Gemini)가 1·2학년 생기부를 분석해 3학년 1학기 수시 전략 리포트 작성 + 전문가 3인 교차검토 + DOCX 다운로드. 교사용·민감정보 주의(외부 AI 전송, 마스킹 권장)",
    tech: "HTML",
    tags: ["AI", "교육", "입시", "교사용", "수시"],
    url: "https://saengbu-analyzer.vercel.app",
    github: "https://github.com/ghkstn916/saengbu-analyzer",
    status: "active",
  },
  {
    id: "ai_submission_dashboard",
    name: "AI 수업 제출 현황",
    desc: "정보 3학년 AI 수업(ch1~ch3 차시·실습 스크린샷 + AI 챌린지)의 학생별 제출 현황을 학번 기준으로 통합한 대시보드 — 반 필터·학번/이름 검색·정렬·미제출만 보기·단원별 제출 매트릭스. Supabase ai2026/ai8 집계. 교사용·민감정보",
    tech: "HTML",
    tags: ["AI", "교육", "대시보드", "교사용", "제출현황"],
    url: "https://ai-submission-dashboard.vercel.app",
    github: "https://github.com/ghkstn916/ai-submission-dashboard",
    status: "active",
  },
  {
    id: "activity_dashboard_2026",
    name: "2026 수업 활동 통합 대시보드",
    desc: "2학년 정보(컴퓨팅시스템·데이터·디지털시민·코딩교실)와 3학년 AI(도입수업·ch1~ch3·실습·AI챌린지)의 모든 학생 활동을 학번 기준으로 한 페이지에 통합. 두 가지 뷰 — 📊 제출 현황(evaluation 명단 59/43명 분모, 미참여 학생까지 학생×활동 매트릭스·반 필터·제출률) / 📝 작성 내용(활동별로 전체 학생의 실제 작성물을 한눈에: 진로서술·서술형창작·코딩 파이썬 코드·AI챌린지 프롬프트/기획서/소감, 학생 클릭 시 전 과목 모달). Excel 10시트 병행. Supabase info2026/ai2026/ai8/lessons/online_judge/evaluation 집계. 교사용·민감정보",
    tech: "HTML",
    tags: ["AI", "정보", "교육", "대시보드", "교사용", "제출현황"],
    url: "https://activity-dashboard-2026.vercel.app",
    github: "https://github.com/ghkstn916/activity-dashboard-2026",
    status: "active",
  },
];
