import React, { Component } from 'react';
import {Nav, Pagamento} from './index';
import './css/produtos.css';


const Card = () =>{
    const [users, setUsers] = React.useState([]);
    React.useEffect(async () => {
        const url = "http://localhost/React-PHP/backend/index.php";

        const response = await fetch(url);
        setUsers(await response.json());
    }, [users])

    return (
        <div id="div"className="mt-5">
            {users.map((element)=>{
            return(
                <div id="teste2" className="Conteiner">
                <div key={element.idproduto} className={`${element.categoria}`}></div>
                <div className="card-body">
                <img id="teste" className="card-img-top" src={require(`./img/${element.imagem}`).default} alt="Imagem de capa do card" />
                    <p className="card-text">{element.descricao}</p>
                    <p className="card-text"><b>R$ {element.preco}</b></p>
                    <p className="card-text">R$ {element.preco_venda}</p>
                </div>
                </div>
            )
        })}
        </div>
    )
}

const Drop = () =>{
        function exibir_categorias(event){
            console.log(event)
        }
        return(
        <div>
            <div className="row">
                <div className="dropdown ml-5">
                    <button className="btn dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categorias
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" onClick={exibir_categorias('Todos')}>Todos</a>
                        <a className="dropdown-item" onClick={exibir_categorias('Geladeira')}>Geladeira</a>
                        <a className="dropdown-item" onClick={exibir_categorias('Fogao')}>Fogao</a>
                        <a className="dropdown-item" onClick={exibir_categorias('Microondas')}>Micro-ondas</a>
                        <a className="dropdown-item" onClick={exibir_categorias('Maquina-louca')}>Maquina de lavar louça</a>
                        <a className="dropdown-item" onClick={exibir_categorias('Maquina-roupa')}>Maquina de lavar Roupa</a>
                    </div>
                </div>
            </div>
        </div>  
        )
    }


class Produtos extends Component{
    render(){
        return(
            <div>
                <Nav />
                <div id="texto" className="p-4 text-center">
                    <h1>Produtos</h1>
                </div>
                <div>
                </div>
                <hr></hr>
                <div id="drop">
                <Drop />
                </div>
                <div className="container text-center">
                    <Card />
                </div>
                <div id="Pagamentos" className="row justify-content-center text-center p-4">
                    <Pagamento />
                </div>
            </div>
        )
    }
}
export default Produtos;
