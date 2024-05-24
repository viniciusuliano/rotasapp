import { Link } from "react-router-dom";
import './index.css'
function Header(){
    return(
        <div>
            <header>
                <h1>Menu</h1>
                <div className="Menu">
                    <Link to='/'>Home</Link>
                    <Link to='/sobre'>Sobre</Link>
                    <Link to='/contato'>Contato</Link>
                </div>
            </header>
        </div>
    )
}

export default Header;