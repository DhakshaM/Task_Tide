"use client"
import React, { useRef, useState } from 'react'
import Card from './Card'


function Foreground() {
  const[cards, setCards]= useState([])
  const addCard=()=>{
    setCards([...cards,{}])
  }
  const deleteCard=(index)=>{
    setCards(cards.filter((_,i)=>i!==index))
  }
  const ref=useRef(null)
  return (
    <div ref={ref} className='fixed z-[3] w-full h-screen top-0 left-0 p-5'>
      <span className='flex align-center justify-end'><button className='bg-zinc-700 rounded-lg px-5 py-3 text-slate-300 text-2xl'onClick={addCard}>Add Task</button></span>
      <div className='grid grid-cols-4 gap-4 py-3'>{
        cards.map((card,index)=>(
        <Card key={index} reference={ref} deleteCard={()=>deleteCard(index)}/>
      ))}
    </div>
    </div>
  )
}

export default Foreground