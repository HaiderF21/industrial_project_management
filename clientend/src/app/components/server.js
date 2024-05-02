"use server"
import { revalidatePath } from 'next/cache';


export default async function idshow(){
   return revalidatePath('http://localhost:3000/components/success')
}