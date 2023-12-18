import React, { useState } from 'react'
import todoContext from './todoContext'

const TodoProvider = (props) =>{
    const [birds, setBirds] = useState([])

    function increment(id){
        let item = birds.find((ele)=>ele.id==id )
        item.likes++;
        setBirds(birds.map((ele)=>(
            ele.id===id? item : ele
        )))
    }
    
    return (
        <todoContext.Provider value={{
            birds:birds,
            setBirds:setBirds,
            increment: increment
            
        }}>
            {props.children}
        </todoContext.Provider>
    )
}

export default TodoProvider