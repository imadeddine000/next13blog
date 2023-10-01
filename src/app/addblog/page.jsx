'use client'
import React, { useState } from 'react'

const Add = () => {
  const [blog,setblog]=useState({
    title:'',
    content:'',
  })
  const handleSubmit=async ()=>{
    fetch('http://localhost:3000/api/addblog',{
     method:'POST',
     body:JSON.stringify(blog)
    }).then(()=>{
      window.alert('added!')
    })
    
      setblog({title:'',content:''})
    
    
  }
  return (
    <div className='w-full '>
      <h1 className='font-bold text-2xl p-4 text-zinc-700'>
        add a new blog .
      </h1>
      <div className='flex  justify-center w-full'>
        <div className='flex flex-col w-full p-10'>
          <input  onChange={(e)=>setblog({...blog,title:e.target.value})} value={blog.title} className='p-2 w-full border-2 rounded-lg mt-1' type='text' name='title' placeholder='blog title.'/>
          <textarea onChange={(e)=>setblog({...blog,content:e.target.value})} value={blog.content} className='p-2 w-full border-2 rounded-lg mt-1 ' type='textarea' name='content' placeholder='start writing.'/>
          <button onClick={handleSubmit} className='bg-zinc-600 px-4 p-2 rounded-lg shadow-lg mt-1'>Add.</button>
        </div>
      </div>
    </div>
  )
}

export default Add