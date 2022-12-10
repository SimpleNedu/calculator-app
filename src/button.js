import React from 'react'

function Button({number, value, setValue}) {
    const handleClick = (e) =>{
        e.preventDefault();
        setValue(value + e.target.innerText );
    }

  return (
    <button 
        onClick={(e)=>{handleClick(e)}}
        >{number}
    </button>
  )
}

export default Button