import {Link} from "react-router-dom"
function Home(){
    return(
        <div><h1>Bem vindo a Página Home</h1>
        <Link to='/sobre'>Sobre</Link>
        <br></br>
        <Link to='/contato'>Nosso contato</Link>
        </div>
    );
}

export default Home;