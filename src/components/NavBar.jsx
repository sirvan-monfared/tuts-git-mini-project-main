import { Link } from "react-router-dom";
import "../css/Navbar.css"
import { useMovieContext } from "../contexts/MovieContext";

function NavBar() {

    const {favorites} = useMovieContext();

    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>

            { favorites.length > 0 && <Link to="/favorites" className="nav-link">Favorites</Link> }
            
        </div>
    </nav>
}

export default NavBar