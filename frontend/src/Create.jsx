import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Create = () => {
    const [task,setTask]=useState()
    
    const handleAdd=() =>{
        
        axios.post('http://localhost:3001/add',{task:task})
        .then(result=>{ console.log(result);
          location.reload()
    })
        .catch(err=>console.log(err))
    }
  return (
    <div className='create_form'>
      <input type="text" name='' id='' placeholder='Enter Data' onChange={(e)=>setTask(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
