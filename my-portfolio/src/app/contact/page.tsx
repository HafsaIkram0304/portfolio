import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
const Contact = () => {
  return(
   <div id='contact' className='pt-32 containor'>
     <div className='graid md:graid-colon-2 gap-10'>
        <div className='space-y-8'>
         <h2 className='5xl'>Get in tuoch</h2>
         <p className='text-gray-600 text[18px] pt-2'>
            Drop me a line, give me a call, or sand me a massage by submitting the from 
         </p>
         <div className='flex gape-3 item-center'>
         <MdOutlineEmail size={30} />xyz@gmail.com
         </div>
         <div className='flex gape-3 item-center'>
         <BsTelephone size={30} /> (021)000,0000
         </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input type='text' 
                className='h-[40px] bg-trancparent border border-accent'
                id='name'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email</label>
                <input type='text' 
                className='h-[40px] bg-trancparent border border-accent'
                id='email'/>
        </div>
        <div className='flex flex-col gap-1'>
                <label htmlFor='msg'>Massage</label>
                <textarea  
                className = 'bg-trancparent border border-accent'
                id='msg' rows={8}/>
                < textarea/>
     </div>
     <button className='bg-accent p-2 px-6'>Sand</button>
   </div>
   </div>
   </div>
  )
  
}

export default Contact