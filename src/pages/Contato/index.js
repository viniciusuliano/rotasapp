import {Link} from 'react-router-dom'
function Contato(){
    return(
        <div>
            <h1>Entre em contato conosco!</h1>
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/sobre'>Sobre nós</Link>
        </div>
    );
}

export default Contato;