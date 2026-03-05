import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from  'react-redux'
  import { addToPastes, updateTopaste } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState('');
    const [searchParam, setSearchParam] = useSearchParams();
    const pasteId = searchParam.get("pasteId");

    const [value, setValue] = useState('');

    const dispatch= useDispatch();
    const allPaste = useSelector((state) => state.paste.pastes);

    function createPaste(){
      const paste ={
        title: title,
        content: value,
        _id: pasteId || Date.now().toString(36),
        createdAt: new Date().toISOString(),
      }
    
      if(pasteId){
        //update paste 
        dispatch(updateTopaste(paste));
      }
      else{
        //create paste
        dispatch(addToPastes(paste));
      }

      setTitle(" ");
      setValue(" ");
      setSearchParam({});


    }

    useEffect(() => {

      if(pasteId){
        const paste = allPaste.find((p) => p._id === pasteId);
        setTitle(paste.title);
        setValue(paste.content);

      }
      
      
    }, [pasteId])
    
    
  return (
   <div>
     <div className='flex flex-row gap-7 place-content-between'>
      <input
      className='p-2 rounded border mt-2 w-[56%]'
      type='text'
      placeholder='enter title here'
      value={title}
      onChange={(e)=> setTitle(e.target.value)}
      />

    <button onClick={createPaste} className='p-2 rounded border mt-2'>
        {pasteId ? "Update My Paste" : "Create my Paste"}
    </button>

    <div></div>

    </div>

    <div className='mt-4'>
      <textarea 
      className='border rounded mt-4 p-2 min-w-125' 
      value={value}
      placeholder='enter content here'
      onChange={(e) => setValue(e.target.value)}
      rows={20}
      />
    </div>
   </div>

    
  )
}

export default Home
