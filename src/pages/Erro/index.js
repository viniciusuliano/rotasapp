import { Link } from "react-router-dom";
function Erro(){
    return(
        <div>
            <h1>ERRO 404</h1>
            <strong>PÁGINA NÃO ENCONTRADA</strong>
            <br></br>
            <Link to='/'>Home</Link> 
        </div>
    )
}

export default Erro;