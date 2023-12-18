import React, { useState } from 'react'

const TaskManager = () => {

    const [arr, setArr] = useState([])
    const [bird, setBird] =useState({bname:"", count:0, id:null});
    let {bname,count}=bird

    function handleInput(e){
        const newID = Date.now()
        setBird({...bird, [e.target.name]:e.target.value, id:newID})
        // setBird({...bird, id:newID})
    }

    function handleSubmit(e){
        e.preventDefault();
        setArr([...arr, bird])
        setBird({bname:"", count:0, id:null})
    }
    function increase(id){
        // console.log(arr)
        let item = arr.find((item)=>item.id === id)
        item.count = (item.count)+1
        console.log(item)

        setArr((arr)=>{
           return arr.map((ele)=> (ele.id===id ? item: ele))
        })
        
      
    }

    function decrease(){

    }

  return (
    <div>
        <form>
            <input type='text' placeholder='enter birds name' name='bname' value={bird.bname} onChange={handleInput} />
            <button onClick={handleSubmit} type='submit'>Add bird</button>
        </form>
        {
            arr && arr.map((ele, index)=>(
                <div style={{border:'1px solid black'}} key={index}>
                    <p>name: {ele.bname}</p>
                    <p>count: {ele.count} </p>
                    <span><button onClick={()=>increase(ele.id)}>inc</button></span>
                    <span><button onClick={()=>decrease(ele.id)}>dec</button></span>
                </div>
            ))
        }
    </div>
  )
}

export default TaskManager