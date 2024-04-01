import ProfileImage from "../assets/react.svg"
const Navbar = ({theme, changeTheme}) => {
    return(
        <nav className={theme?"navbar navbar-expand-lg bg-warning shadow-lg" : "navbar navbar-expand-lg bg-dark shadow-lg"}>
         <div className="container-md">
         <a className={theme?"navbar-brand text-dark":"navbar-brand text-light"} href="#"><img src={ProfileImage} alt="" />&nbsp; &nbsp; React Todo</a>
         <button className={theme?"bg-transparent border-0 text-dark":"bg-transparent border-0 text-light"} onClick={()=>changeTheme()}>{theme? <i className="fa-regular fa-moon"></i> : <i className="fa-regular fa-sun"></i>}</button>
        </div>
        </nav>
    )
}

export default Navbar;