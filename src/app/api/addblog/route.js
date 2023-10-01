import { NextResponse,NextRequest } from 'next/server'
import createConncetion from '../../../../server/mongodb'
import Blog from '../../../../server/models/blogschema'

export async  function POST(req){
  
    const {title,content}=await req.json()
    const blog=new Blog({
      title,
      content
    })
    blog.save().then(()=>{
      console.log('blog saved in the db!')
    })
 

   return NextResponse.json({message:'Done!'})
 }


