import React from 'react'

const Button = ({itemNameList, selectItem}) => {
  return (
    <div className='item-button'>
        {itemNameList.map((item)=>(
            <div key={item} onClick={()=>{selectItem(item)}}>{item}</div>
        ))}
    </div>
  )
}

export default Button
