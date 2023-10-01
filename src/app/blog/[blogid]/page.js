import Link from "next/link"


export default async function Blog({params}) {
  const blog=await  getBlog(params.blogid)
  
  return (
    <main className="h-full">
     <h1 className="font-bold text-xl p-2">{blog.title}</h1>
     <p className="text-sm p-2 text-zinc-600">{blog.content}</p>
    </main>
  )
}

const getBlog=async(id)=>{

  const res=await fetch('http://localhost:3000/api/getbyid',{
    method:'POST',
    body:JSON.stringify({
      id:id
    })
  
  })
  const result=await res.json()
  return result.res
 
 }
