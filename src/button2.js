import React from 'react'

function Button2({setAns, value, setValue, number, setsign}) {
    const handleClear = (e) =>{
        e.preventDefault();
        setAns('')
        setValue('')
        setsign('')
    }
    const handleDel = (e) =>{
        e.preventDefault();
        setValue(value.slice(0, -1))    
    }
  return (
    <button 
        onClick={(e)=>{number === 'del' ? handleDel(e) : handleClear(e) }}
        >{number}
    </button>
  )
}

export default Button2