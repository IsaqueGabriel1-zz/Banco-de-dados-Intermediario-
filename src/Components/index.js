import React, { Component } from 'react';
import './css/style.css';
import './css/produtos.css';
import Img from '../Components/img/visa-master.png';
import { Link } from 'react-router-dom';


export class Pagamento extends Component{
    render(){
        return(
            <div>
                <div className="row justify-content-center">
                    <div ><p>Pagamentos</p></div>
                </div>
                <div id="row" className="row justify-content-center">
                    <div>
                        <img id="img2" src={Img}/>
                    </div>
                </div>
            </div>
        )
    }
}

export class Nav extends Component{
    render(){
        return(
            <div className="container-fluid p-0">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <Link className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" to="/" role="tab" aria-controls="nav-home" aria-selected="true">Home</Link>
                        <Link className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" to="./produtos" role="tab" aria-controls="nav-profile" aria-selected="false">produtos</Link>
                        <Link className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" to="./contatos" role="tab" aria-controls="nav-contact" aria-selected="false">Contato</Link>
                        <Link className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" to="./lojas" role="tab" aria-controls="nav-contact" aria-selected="false">Nossas Lojas</Link>
                    </div>
                </nav>
            </div>
            

            /*
            <div>
                 <div id="nav" className="row justify-content-center">
                     <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <Link to="./InicialPage">Pagina inicial</Link>
                     </div>
                     <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <Link to="./produtos">Produtos</Link>
                     </div>
                     <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <Link to="./contatos">Contatos</Link>
                     </div>
                     <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <Link to="./lojas">Nossas Lojas</Link>
                     </div>  
                </div>
            </div>
            */
        )
    }
}



class Inicio extends Component{
    render(){
        return(
            <div>
                <div>
                    <Nav />
                    <main>
                    <div className="row justify-content-center">
                        <div className="">
                           <h1 className="texto" className="text-center">Seja Bem Vindo!</h1>
                        </div>  
                    </div>
                    <div className="row justify-content-center">
                        <div>
                            <p className="texto">Aqui em nossa loja, programadores tem dessconte para sua casa!</p>    
                        </div> 
                    </div>
                        <hr></hr>
                    </main>
                </div>
                <div id="Pagamentos2" className="container-fluid p-3 text-center">
                    <Pagamento />
                    <div className="row justify-content-center text-center mt-4">
                         <p>© 2020 - Isaque Gabriel</p>
                    </div>  
                </div>

            </div>
           
        )
    }
}

export default Inicio;