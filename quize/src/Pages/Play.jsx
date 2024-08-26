import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../Context/Main'
import { useNavigate } from 'react-router-dom';

const Play = () => {
   const {playAgain,result,finish,selAnswer,userAnswer,user,data,current, next,prev}=useContext(MainContext);
   const [sel,setSel]=useState(null);
   const navigate=useNavigate();
   useEffect(
    ()=>{
      if(user==null){
        navigate('/login');
      }
    },
    [user]
   )
    const selectOption=(index,ans)=>{

      setSel(ans);
      selAnswer(index,ans);

    }

    useEffect(
      ()=>{
        const d=userAnswer.filter(
          (ans)=>{
            if(ans.index == current) return true;
            else return false; 
          }
        )
        if(d.length == 0){
          setSel(null);
        }
        else{
          setSel(d[0].ans);
        }
      },
      [current]
    )
  return (
    <>
    {
      result==null
      ?
      <>
    
       {
       data.length == 0
       ?
       <h1 className='text-center'>Loading...</h1>
       :
       <div className='w-[600px] mx-auto  border mt-[100px]'>
       <div className='card'>
         <h3 className='text-2xl p-2'> {current+1}) {data[current].question}</h3>
         <div onClick={()=>{selectOption(current,"a")}} className={`p-2 border w-full cursor-pointer ${sel == "a" ? 'bg-blue-400 text-white' : ''}`}>a){data[current].option_a}</div>
         <div onClick={()=>{selectOption(current,"b")}} className={`p-2 border w-full cursor-pointer ${sel == "b" ? 'bg-blue-400 text-white' : ''}`}>b){data[current].option_b}  </div>
         <div onClick={()=>{selectOption(current,"c")}} className={`p-2 border w-full cursor-pointer ${sel == "c" ? 'bg-blue-400 text-white' : ''}`}>c) {data[current].option_c} </div>
         <div onClick={()=>{selectOption(current,"d")}} className={`p-2 border w-full cursor-pointer ${sel == "d" ? 'bg-blue-400 text-white' : ''}`}>d) {data[current].option_d}</div>
       </div>
       
      
       <div>
         <div className='flex justify-between'>
         <button className={`${current==0 ? 'opacity-0 invisible' : ''} p-2 text-white bg-blue-500 `}onClick={prev}>Prev</button>
        {
          data.length-1==current
          ?
          <button className={` p-2 text-white bg-blue-500 `}onDoubleClick={finish}>Finish</button>

          :
          <button className={`${data.length -1 == current ? 'opacity-0 invisible' : ''} p-2 text-white bg-blue-500 `} onClick={next}>Next</button>

        }

         
         
      
       </div>
     </div>
      </div>

     }
     </>
     :
     <div className='w-[600px] mx-auto  border mt-[100px]'>
       <div className='card px-3' style={{lineHeight:"40px"}}>
        Total: {data.length}<hr/>
        Marks: {result.marks} <hr/>
        Negative: {result.neg}<hr/>
        Final: {result.marks-result.neg}

        </div>
        <button onClick={playAgain} className='block mx-auto bg-blue-500 text-white p-3'>Play Again</button>
        </div>
    }
    </> 
  )
}

export default Play
