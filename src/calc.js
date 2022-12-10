import React from 'react'
import { useState } from 'react'
import Button from './button';
import Button2 from './button2';
import { calcData} from './data';

export const Calc = () => {
    const[value,setValue] = useState("");
    const[sign,setsign] = useState('');
    const[ans,setAns] = useState(''); 
    
    const handleClick2 = (e) =>{
        e.preventDefault();
         if (ans === ''){
            setAns(value);
            
        }else{
            let Update = sign === '+'?  Number(ans) + Number(value):
            sign === '-'?   Number(ans) - Number(value):
            sign === '*'?   Number(ans) * Number(value):
            sign === '/'?   Number(ans) / Number(value):
                    'Math error';
           setAns(Update) 
        }
        setValue('')
        setsign(e.target.innerText);
    }

    const handleSum=(e)=>{
        e.preventDefault();
        if (ans !== ''){
            let Update2 = sign === '+'?  Number(ans) + Number(value):
            sign === '-'?   Number(ans) - Number(value):
            sign === '*'?   Number(ans) * Number(value):
            sign === '/'?   Number(ans) / Number(value):
           'Math error';
                if (Update2 < 999999999) {
                    setValue(Update2)
                } else {
                    setValue(Update2.toPrecision(5))
                }
        }
        setAns('')
        setsign(e.target.innerText)
    }
    
    const handleChange = (e) =>{
        e.preventDefault();
        setValue(Number(e.target.value));
    }

  return (
    <div className='container'>
        {}

       <div className='contain2'>
            <p>Project by <a href="#ds">SimpleBoi</a></p>
            <div className='input'>
                <div className='inp1'>{ans}</div>
                <div className='inp2'>{sign}</div>
                <input 
                    type="number" 
                    maxLength='7' 
                    placeholder='0' 
                    autoFocus value={value} 
                    onChange={handleChange}/>
            </div>

            {/* the section for all the numbers in the calculator */}
            <div className='numbers'>
                {calcData.numbers.map((number)=>{
                    return(
                        <Button
                            number={number}
                            value={value}
                            setValue={setValue}/>
                    )
                })}
            </div>
                
            {/* calculation controls */}
            <div  className='controls'>
                <div className='controls1'>
                    {calcData.clearDel.map((deac)=>{
                    return(
                        <Button2
                            number={deac}
                            setsign={setsign}
                            setAns={setAns}
                            value={value} 
                            setValue={setValue}/>
                    )
                })}
                </div>
                <div className='controls2'>
                    <button onClick={(e)=>{handleClick2(e)}}>/</button>
                    <button onClick={(e)=>{handleClick2(e)}}>*</button>
                    <button onClick={(e)=>{handleClick2(e)}}>+</button>
                    <Button
                        number='0'
                        value={value}
                        setValue={setValue}/>
                    <button onClick={(e)=>{handleClick2(e)}}>-</button>
                    <button className='equals' onClick={(e)=>{handleSum(e)}}>=</button>
                </div>
            </div>
        </div>
    </div>
  )
}
