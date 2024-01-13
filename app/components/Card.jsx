"use client"
import React, { useState } from 'react'
import { MdOutlineTask } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { motion } from "framer-motion"

function Card({reference, deleteCard}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className='relative w-60 h-72 rounded-[40px] bg-zinc-700 text-white p-5 overflow-hidden'>
        <div className='flex items-center justify-between gap-1'>
        <MdOutlineTask size="1em" color='#cbd5e1'/>
        <form>
            <input type="text" className='bg-zinc-700 text-l border-slate-200 rounded-lg border px-2 py-1' style={{wordWrap: 'break-word', whiteSpace: 'pre-wrap'}} placeholder='Enter Task Here'/>
        </form>
        </div>
        <form>
            <textarea className='bg-zinc-700 w-full h-90 text-l border-slate-200 rounded-lg border px-2 py-1 mt-5' style={{wordWrap: 'break-word', whiteSpace: 'pre-wrap'}} placeholder='Enter Description Here'></textarea>
        </form>
        <div className='footer absolute bottom-0 bg-sky-500 w-full h-[50px] left-0'>
            <div className='flex items-center justify-between px-7 py-3 text-slate-900 font-medium'>
            <h5 onClick={deleteCard} className='cursor-pointer'> Delete Task</h5>
            <AiOutlineDelete onClick={deleteCard} className='cursor-pointer'/>
            </div>
        </div>
    </motion.div>
  )
  }

export default Card