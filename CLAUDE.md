@AGENTS.md

# 프로젝트 등록 규칙 (meta-dashboard)

이 저장소의 `src/lib/projects.ts`는 사용자의 모든 프로젝트를 한 곳에서 보여주는 대시보드(https://meta-dashboard-teal.vercel.app)의 단일 소스 오브 트루스다.

## 새 프로젝트를 Vercel에 배포하거나, 기존 프로젝트의 공개 URL이 확정되면

반드시 아래 절차를 배포 작업의 **일부**로 포함해 수행한다. 사용자가 "프로젝트 대쉬보드에 올려줘"라고 매번 요청하지 않아도 먼저 챙긴다.

1. `src/lib/projects.ts`에서 해당 프로젝트 엔트리를 찾는다.
   - 없으면 새로 추가한다 (`id`, `name`, `desc`, `tech`, `tags`, `status` 필수).
   - 하위 프로젝트는 상위 프로젝트의 `children` 배열에 `SubProject` 형태로 넣는다.
2. `url` 필드에 **정식 vercel.app 별칭**을 기입한다.
   - 좋은 예: `https://online-judge-xi.vercel.app`, `https://meta-dashboard-teal.vercel.app`
   - 나쁜 예: `https://<project>-<hash>-ghkstn916s-projects.vercel.app` (배포마다 바뀜)
   - 정식 별칭은 `vercel project ls --scope ghkstn916s-projects` 출력의 URL 컬럼에서 확인한다.
3. `git add src/lib/projects.ts && git commit -m "..." && git push`
4. **반드시 CLI로 재배포까지 수행한다.**
   ```bash
   cd C:/Users/ghkst/desktop/claude/meta-dashboard
   vercel deploy --prod --yes
   ```
   GitHub 자동 배포에 의존하지 말 것 — 이전에 연결 또는 캐시 문제로 반영이 누락된 사례가 있다.

## 왜 이 규칙이 있는가

사용자는 교사/개발자로서 10개 이상의 프로젝트를 병행 운영 중이다. meta-dashboard에 없는 프로젝트는 사용자에게 "존재하지 않는 것과 같다" — 링크를 잊고, 다시 찾지 못한다. 따라서 등록 누락은 기능 누락이다. 배포 완료를 보고하기 전에 반드시 이 단계를 마쳐야 한다.
