import React, { useContext, useState } from "react"
import todoContext from "./components/context/todoContext"


const NewApp = () =>{
    const [bname, setBname] = useState("")
    const [bird,setBird] = useState("")
    let {birds,setBirds,increment} = useContext(todoContext)

    function handleInput(e){
        setBname(e.target.value)
        console.log(birds)
    }

    function handleSubmit() {
        const newId = Date.now();
        const newBird = { name: bname, likes: 0, id: newId };
    
        setBird(newBird);
        setBirds((prevBirds) => [...prevBirds, newBird]);
        setBname(""); // Reset the input field
      }

    return (
        <div>
            <div>
                <h1>Bird list</h1>
                <input type="text" value={bname} onChange={(e)=>setBname(e.target.value)}/>
                <button onClick={handleSubmit}>Add todo</button>
            </div>
            <div>
                <ul>
                {
                    
                    birds.map((ele)=>(
                        <div key={ele.id}>
                            <li>{ele.name}</li>
                            <span>Likes: {ele.likes} <button onClick={()=>increment(ele.id)}>+</button></span>
                        </div>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default NewApp