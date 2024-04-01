import { useState } from "react";
import { useEffect } from "react";

const Form = ({theme, saveTodo, edit, updateTodo}) => {

  // input kitne bhi ho, hame uske liye state banana padta hai
  const[text, setText] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    // saveTodo(text);
    if(edit.isEdit){
      updateTodo(edit.todo.id, text);
    }
    else{
      saveTodo(text);
    }

  

    setText("");
  }



  // INPUT State
// const [text, setText] = useState("") 



// const handleSubmit = (e) => {
//   e.preventDefault();

//   if(edit.isEdit){
//     updateTodo(edit.todo.id, text)
//   }

//   saveTodo(text);
//   setText(" ");
// }

// USE EFFECT
// useEffect(()=>{
//         setText(edit.todo.text)
// }, [edit]);


useEffect(()=>{
  setText(edit.todo.text);
}, [edit])



    return(
      <form className="form my-3" onSubmit={(e)=>handleSubmit(e)}>
        <input className={theme?"form-control":"form-control rounded-3 border-info border-1 bg-secondary"} type="text" placeholder="Enter text here..." required value={text} onChange={(e)=>setText(e.target.value)}/>
        <button className={theme?"btn btn-warning w-100 my-3 rounded-0":"btn btn-info w-100 my-3 text-dark rounded-3"}>Submit</button>
      </form>
    );
  }
export default Form;