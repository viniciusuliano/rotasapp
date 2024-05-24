import {Link} from 'react-router-dom'

function Sobre(){
    return(
        <div><h1>Sobre Nós</h1>
        <Link to="/">Home</Link>
        <br></br>
        <Link to='/contato'>Nosso contato</Link>
        </div>
    );
}


export default Sobre;