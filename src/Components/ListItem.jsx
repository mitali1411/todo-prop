const ListItem = ({theme, changeTheme, todo, deleteTodo, editTodo}) => {

    return(
        <li className= {theme?"rounded-0 list-group-item bg-light text-dark my-1":"rounded-3 list-group-item bg-secondary border-info border-2 text-light my-1"}>{todo.text}
                <span className="float-end">
                    <button className={theme?"btn btn-success rounded-0":"btn btn-success rounded-1"} onClick={()=> editTodo(todo)}> Edit</button>
                    <button className={theme?"btn btn-danger rounded-0 mx-1":"btn btn-danger rounded-1 mx-1" } onClick={()=>deleteTodo(todo.id)}>Delete</button>
                </span>
            </li>
    );
};

export default ListItem;