import React from 'react'

const basicImg = "https://mblogthumb-phinf.pstatic.net/MjAyMTA3MjJfMTUy/MDAxNjI2OTE3NjI5MzIw.MpddVnh8PLVpQBq4FiP00-m8NPulTwNmWrMIKyPys1Yg.sZlzccrSUkJXLkEdy4u2IFPY7ssSb2KpDgg4YCMWkaAg.PNG.dct8867/%EB%AC%BC%EC%9D%8C%ED%91%9C_%EB%A0%88%EB%93%9C_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B84x.png?type=w800"

const Board = ({title, currentItem}) => {
  return (
    <div className={title=="You"?"item-board-left":"item-board-right"}>
        <img className='item-img' src={currentItem?currentItem.img:basicImg}/>
        <h2 className='result'>lose</h2>
    </div>
  )
}

export default Board
