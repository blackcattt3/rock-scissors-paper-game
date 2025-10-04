import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './component/Board'
import Button from './component/Button'

function App() {

  const [currentItem, setCurrentItem] = useState("");
  const [computerItem, setComputerItem] = useState("");
  const [gameResult, setGameResult] = useState("");

  const item={
    rock:{
      name : "rock",
      img : "https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg"
    },
    scissors:{
      name : "scissors",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoaGhDY7ZwUIUZgPiyvR4d7mfjztKSEB9rA&s"
    },
    paper:{
      name : "paper",
      img : "https://i.namu.wiki/i/HZUMLJivyd1QwdPZfAO8OB2kRCdjbZCnS2o5m5mKCtj9ZSZtULRv9eSLQtbMLoVyRzyw0H8XSGIeb8QIVude1A.webp"
    }
  }
  const itemNameList = Object.keys(item);   //['rock', 'scissors', 'paper']

  const selectItem = (itemName)=>{
    const user = item[itemName];
    const computer = randomItem();

    setCurrentItem(user);
    setComputerItem(computer);

    setGameResult(calculateResult(user, computer));
    console.log(gameResult);
  }

  const randomItem = ()=>{
    const randomNum = Math.floor(Math.random()*3);
    return item[itemNameList[randomNum]];
  }

  const calculateResult = (user, computer)=>{
    // console.log("user", "computer", user, computer) -> 오브젝트로 들어온다
    if(user.name === computer.name){
      return "tie"
    } else if(user.name === "rock") {return computer.name === "scissors"?"win":"lose"}
      else if(user.name === "scissors") {return computer.name === "paper"?"win":"lose"}
      else if(user.name === "paper") {return computer.name === "rock"?"win":"lose"}
      
  }

  return (
    <div>
      <div className='container'>
        <div>rockScissorsPaper Game</div>
        <div className='main'>
          <div className='top'>
            <h3 className='score-board'>2:3</h3>
            <div className='horizontal-line'></div>
          </div>
          <div className='row'>
            <Board title='You' currentItem={currentItem}/>
            <div className='vertical-line'></div>
            <Board title='computer' currentItem={computerItem}/>
          </div>
        </div>
        <Button itemNameList={itemNameList} selectItem={selectItem}/>
      </div>
    </div>
  )
}

export default App

// item-button 을 누르면 그에 맞는 이미지가 선택된다.
// computer가 랜덤으로 item 선택하게 한다
// win/lose 알고리즘 짜기, 화면 구현
// score 변하게 하기(누적)
// reset 버튼
// item 버튼 꾸미기(부트스트랩)