import ListItem from "./ListItem"

const ListGroup = ({theme, changeTheme, todos, deleteTodo, editTodo}) => {

    if(todos.length === 0){
        return(
            <h1 className="display-5 text-center text-secondary">No Todos Yet..</h1>
        )
    }

    return(
        <ul className="my-3 list-group">
           {todos.map((todo) => {
            return  <ListItem key={todo.id} theme={theme} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
})} 
        </ul>
    );
};

export default ListGroup;