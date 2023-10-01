import Link from "next/link"
import createConncetion from "../server/mongodb"


export default async function Home() {
  await createConncetion()

  const blogs=await  getBlogs()
  
  return (
    <main className="h-full">
      {blogs&&blogs.map((blog,index)=>(
        <div key={index} className="border-zinc-6 m-2 border-2 rounded-lg p-2" >
          <Link className="font-bold p-2 text-zinc-600" href={`/blog/${blog._id}`} >{blog.title}</Link>
          <p className="p-2 font-sm text-gray-400">{blog.content.slice(0,20)}...</p>
          <div className="flex ">
          <Link href={`/blog/${blog._id}`}>
           <p className="p-2  bg-zinc-600 rounded-lg w-fit m-2 hover:border-zinc-400 border-2" > Read more</p>
          </Link>
          
          </div>
        </div>
      ))}
    </main>
  )
}

const getBlogs=async()=>{
  
  const res=await fetch(`${process.env.URL}/api/getblogs`,{next:{revalidate:1}})
  const data=await res.json()
 
  return data.data

 }
