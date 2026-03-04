import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import { toast } from 'react-toast';

const Paste = () => {

  const[searchTerm, setSearchTerm] = useState("");

  const pastes = useSelector((state) => state.paste.pastes); //fetch pastes from store
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }

//   const handleShare = async (paste) => {
//   if (navigator.share) {
//     try {
//       await navigator.share({
//         title: paste.title,
//         text: paste.content,
//       });
//     } catch (error) {
//       console.log("Sharing failed", error);
//     }
//   } else {
//     alert("Sharing not supported in this browser");
//   }
// };

 




  return (
    <div>
      <input 
      className='p-2 border rounded-2xl min-w-150 mt-5'
      type="search"
      placeholder='search here...'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}

       />

       <div className='flex flex-col gap-4 mt-5'>
        {
          filteredData.length > 0 && 
          filteredData.map(
            (paste) =>{

              return(
                <div className='border ' key={paste?._id}>
                  <div>
                    {paste.title}
                  </div>
                  <div>
                    {paste.content}
                  </div>
                  <div className='flex flex-row gap-4 place-content-evenly'>
                    <button>Edit</button>
                    <button>View</button>
                    <button onClick={
                      () => handleDelete(paste?._id)
                    }>Delete</button>
                    <button onClick={
                      ()=> {navigator.clipboard.writeText(paste?.content)
                            toast.success("copy to clipboard")}
                      }>Copy</button>


                    <button onClick={
                      () => {
                        navigator.share({
                          title: paste?.title,
                          text: paste?.content,
                        })
                        // const shareUrl = `${window.location.origin}/pastes/${paste?._id}`;
                        // navigator.clipboard.writeText(shareUrl);
                        // toast.success("Share link copied to clipboard");
                      }
                    }>Share</button>
                  </div>



                  <div>
                    {paste.createdAt}
                  </div>
                </div>
      
              )
            }
          )
        }

       </div>

    </div>
  )
}

export default Paste
