import { NextResponse } from 'next/server'
import Blog from '../../../../server/models/blogschema'
import createConncetion from '../../../../server/mongodb'

export async function GET(){
  
   let res=await Blog.find()
  
   return NextResponse.json({message:'done!',data:res})
}