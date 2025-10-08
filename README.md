<h2>🎮 가위바위보 게임 (react)</h2>
<br>
↓페이지 바로가기↓
<h2>https://my-rsp-game.netlify.app</h2>
<br>
<h3>📌 프로젝트 소개</h3>
React를 이용하여 가위바위보 게임을 만들었습니다.<br>
user가 3개의 버튼(rock, scissors, paper)으로 어떤 것을 낼지 결정할 수 있는 동시에 컴퓨터는 random하게 자신의 패를 결정합니다.<br>
user와 컴퓨터 중 먼저 점수가 5점에 도달하는 즉시 게임이 종료됩니다.<br>
<br>
<h3>📂 폴더 구조</h3>
📦 rock-scissors-paper/<br>
┗ 📂 src/<br>
   ┣ 📂 components<br>
   ┃ ┣ 📜 Board.jsx<br>
   ┃ ┗ 📜 Button.jsx<br>
   ┣ 📂 img<br>
   ┃ ┗ 📜 game-logo-transparent-trimmed.png<br>
   ┣ 📜 App.jsx<br>
   ┣ 📜 App.css<br>
   ┗ 📜 main.jsx<br>
<br>
<h3>🧩 주요 기능</h3>
✅ 가위·바위·보 버튼 클릭 시, `useState`로 상태를 관리하여 실시간으로 화면에 반영된다.<br>
✅ 컴퓨터는 `Math.random()`을 이용해 랜덤한 패를 선택한다.<br>
✅ 승패는 `calculateResult()` 함수에서 조건문을 통해 판정된다.<br>
✅ 각 플레이어의 점수는 `useState`의 이전 상태(prevState)를 참조해 누적된다.<br>
✅ 어느 한쪽이 5점이 되면 `handleGameOver()`가 실행되어 게임이 종료된다.<br>
✅ 게임 종료 후에는 모든 버튼이 비활성화되고, 모달창이 표시된다.<br>
✅ `RESET` 버튼 클릭 시 점수 및 상태가 초기화된다.<br>
<br>
<h3>🛠 사용 기술</h3>
✅ Frontend: React (Vite)<br>
✅ Language: JavaScript (ES6+)<br>
✅ Styling: CSS3 (Flexbox, transform 활용)<br>
✅ Deployment: Netlify<br>
<br>
<h3>🚀 배포</h3>
✅ Netlify를 통한 자동 배포 (GitHub 연동)<br>
✅ 배포 URL: https://my-rsp-game.netlify.app<br>
<br>
<h3>✍️ 회고</h3>
✓ 'useState'의 비동기적 상태 업데이트와 참조(주소) 개념을 이해했다.<br>
    👉 useState로 관리하는 배열이나 객체는 직접 수정(push 등)하지 말고 새로운 객체/배열 등을 만들어서 교체해야 한다. 그래야 참조주소가 바뀜.<br>
✓ Button, Board 등으로 컴포넌트를 분리하여 재사용성과 유지보수성을 높였다.<br>
✓ 조건부 렌더링(`&&`, 삼항 연산자)과 클래스 동적 제어(`className={`result ${result}`}`)를 익혔다.<br>