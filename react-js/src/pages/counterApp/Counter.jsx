import React,{useState} from 'react'

const Counter = () => {
  const [count,setCount]= useState(0);
  const handleCounter = (type)=> {
    if(type == 'decrement' && count > 0){
      setCount(count-1);
    }else if(type == 'increment'){
      setCount(count+1);
    }
    console.log(type);
  }

  const resetCounter = () => {
    setCount(0);
  }


  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600">Counter</div>
      <div className="flex flex-col justify-center items-center gap-[1rem] h-[200px] w-[400px]">
        <div className="flex gap-[1rem]">
          <button onClick={() => handleCounter('decrement')}  class="text-[1.5rem] px-[1rem] bg-gray-100 border border-gray-300 rounded-md">-</button>
          <span className="text-[1.5rem]">{count}</span>
          <button onClick={() => handleCounter('increment')} class="text-[1.5rem] px-[1rem] bg-gray-100 border border-gray-300 rounded-md">+</button>
        </div>
        <button onClick = {resetCounter} class="text-[1.5rem] px-[1rem] bg-gray-100 border border-gray-300 rounded-md">Reset</button>
      </div>
    </div>
  )
}

export default Counter