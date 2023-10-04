import { NextResponse } from 'next/server'
import Blog from '../../models/blogschema'

export async function POST(req){
    
   const {id} = await req.json()
   
   let res=await Blog.findOne({_id:id})
    
    return NextResponse.json({res:res})
}