import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from  'react-redux'
  import { addToPastes, updateTopaste } from '../redux/pasteSlice';

const ViewPaste = () => {

  const {id} = useParams();
  
  const allPaste = useSelector((state) => state.paste.pastes);

  const paste = allPaste.filter((p)=> p._id === id )[0];
  console.log(paste)
  
  


  return (
    <div>
     <div className='flex flex-row gap-7 place-content-between'>
      <input
      className='p-2 rounded border mt-2 w-[56%]'
      type='text'
      placeholder='enter title here'
      disabled
      value={paste.title}
      onChange={(e)=> setTitle(e.target.value)}
      />

    {/* <button onClick={createPaste} className='p-2 rounded border mt-2'>
        {pasteId ? "Update My Paste" : "Create my Paste"}
    </button> */}

    <div></div>

    </div>

    <div className='mt-4'>
      <textarea 
      className='border rounded mt-4 p-2 min-w-125' 
      value={paste.content}
      placeholder='enter content here'
      disabled
      onChange={(e) => setValue(e.target.value)}
      rows={20}
      />
    </div>
   </div>
  )
}

export default ViewPaste
