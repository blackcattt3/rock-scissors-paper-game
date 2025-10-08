<h2>🎮 가위바위보 게임 (react)</h2>
<br>
↓페이지 바로가기↓
<h2>https://my-rsp-game.netlify.app/</h2>
<br>
<h3>📌 프로젝트 소개</h3>
React를 이용하여 가위바위보 게임을 만들었습니다.<br>
user가 3개의 버튼(rock, scissors, paper)으로 어떤 것을 낼지 결정할 수 있는 동시에 컴퓨터는 random하게 자신의 패를 결정합니다.<br>
user와 컴퓨터 중 먼저 점수가 5점에 도달하는 즉시 게임이 종료됩니다.<br>
<br>
<h3>📂 폴더 구조</h3>
📦 rock-scissors-paper
┗ 📂 src
   ┣ 📂 components
   ┃ ┣ 📜 Board.jsx
   ┃ ┗ 📜 Button.jsx
   ┣ 📂 img
   ┃ ┗ 📜 game-logo-transparent-trimmed.png
   ┣ 📜 App.jsx
   ┣ 📜 App.css
   ┗ 📜 main.jsx

<br>
<h3>🧩 주요 기능</h3>
✅ 가위·바위·보 버튼 클릭 시, `useState`로 상태를 관리하여 실시간으로 화면에 반영됩니다.
✅ 컴퓨터는 `Math.random()`을 이용해 랜덤한 패를 선택합니다.
✅ 승패는 `calculateResult()` 함수에서 조건문을 통해 판정됩니다.
✅ 각 플레이어의 점수는 `useState`의 이전 상태(prevState)를 참조해 누적됩니다.
✅ 어느 한쪽이 5점이 되면 `handleGameOver()`가 실행되어 게임이 종료됩니다.
✅ 게임 종료 후에는 모든 버튼이 비활성화되고, 모달창이 표시됩니다.
✅ `RESET` 버튼 클릭 시 점수 및 상태가 초기화됩니다.
<br>
<h3>🛠 사용 기술</h3>
✅ Frontend: React (Vite)
✅ Language: JavaScript (ES6+)
✅ Styling: CSS3 (Flexbox, transform 활용)
✅ Deployment: Netlify

“useState로 관리하는 배열이나 객체는 직접 수정하지 말고 새로 만들어서 교체해야 한다.”
