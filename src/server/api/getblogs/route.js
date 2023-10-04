import { NextResponse } from 'next/server'
import Blog from '../../models/blogschema'
import createConncetion from '../../mongodb'

export async function GET(){
  
   let res=await Blog.find()
  
   return NextResponse.json({message:'done!',data:res})
}