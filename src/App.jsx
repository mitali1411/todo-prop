import Form from "./Components/form";
import Navbar from "./Components/Navbar";
import ListGroup from "./Components/listGroup";
import { useState } from "react";

// THEME 
const App = () => {

  
  const [theme, setTheme]= useState(true);

  let changeTheme = () => {
    if(theme){
      setTheme(false);
    }
    else{
      setTheme(true);
    }
  };

  // TODO
  const [todos, setTodos]=useState([
    {id:1, text:"task one"},
    {id:2, text:"task one"},
  ]);


  // Edit Todo
const [edit, setEdit] = useState({
  todo : {},
  isEdit : false,
});

  // SAVE TODo
  const saveTodo = (text) => {
    // console.log(text);
    const newTodo = {
      id : crypto.randomUUID(),
      text : text,
  }
  setTodos([newTodo, ...todos])
  }

// DELETE TODO
const deleteTodo = (id) => {
  setTodos(todos.filter(item => {
    if(item.id !==id){
      return true;
    }
  }))
}

// EditTodo
const editTodo = (oldTodo) => {
  setEdit({
    todo : oldTodo, 
    isEdit : true
  })
}


// Update Todo
const updateTodo = (oldId, newText) => {
  setTodos(todos.map(item => item.id === oldId ? {id : oldId, text : newText} : item));

  setEdit({
    todo :{},
    isEdit : false,
  })
}

















//   // let theme = false;
//   const [theme, setTheme] = useState(false);

//   let changeTheme = () => {
//     if(theme){
//       // theme = false;
//       setTheme(false);
//     }else{
//       // theme = true;
//       setTheme(true);
//     }
//     console.log(theme)
//   }


  // DATA IN ListItem
  // const [todos, setTodos] = useState([]);


  // Edit 
  // const [edit, setEdit] = useState({
  //   todo : {},
  //   isEdit : false,
  // })

  // const saveTodo = (text) => {
  //   // setTodos();
  //   // console.log(text)
  //   const newTodo = {
  //     id : crypto.randomUUID(),
  //     text : text,
  //   };
  //   setTodos([newTodo, ...todos]);
  // }


  // DELETE TODO
  // const deleteTodo = (id) => {
  //   setTodos(todos.filter(item => {
  //     if(item.id!==id){
  //       return true;
  //     }
  //   }))
  // }


  // EDIT TODO
  // const editTodo=(oldTodo) => {
  //   setEdit({
  //     todo : oldTodo,
  //     isEdit : true,
  //   })
  // }



  //UPDATE TODO
  // const updateTodo = (oldId, newText) => {
  //   setTodos(todos.map(item => {
  //     if(item.id === oldId){
  //       return{
  //         id : oldId,
  //         text, newText,
  //       }
  //     }else{
  //       return item;
  //     }
  //   }))

  // setTodos(todos.map(item=>item.id===oldId ? {id:oldId, text : newText} : item))
  //   setEdit({
  //     todo: {},
  //     isEdit: false,
  //   })
  // }





  return(
    <>
      <Navbar theme={theme} changeTheme={changeTheme}/>
      <div style={{minHeight:"100vh"}} className={theme?'container-fluid p-5 bg-light':'container-fluid p-5 bg-dark'}>
      <Form theme={theme} saveTodo={saveTodo} edit={edit} updateTodo={updateTodo}/>
      <ListGroup theme={theme} changeTheme={changeTheme} todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>
    </>
  );

}
export default App;
