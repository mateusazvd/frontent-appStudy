import { useState } from "react";
import "./index.css";


export default function CreateAnnotation(props){


    //cadastrar uma anotação 
    function Cadastrar(){
        props.mudar(false)
        const dataMontado = {assuntoInput,descricaoInput}
    }


    // 
    const [assuntoInput,setAssuntoInput] = useState('')
    const [descricaoInput,setDescricaoInput] = useState('')

    return(
        <>
            <div className="container">
                <div className="main-createAnnotation">
                    <h3 className="title-form">Cadastrar novo estudo</h3>
                    <div className="inputContainer">
                    <p>Assunto</p>
                    <input type="text" className="input" onChange={(e)=> setAssuntoInput(e.target.value)}/>
                    <p>Descrição</p>
                    <input type="text" className="input" onChange={(e)=> setDescricaoInput(e.target.value)}/>
                    </div>
                    <div className="btn-area">
                     <button className="btn-form" onClick={()=> Cadastrar()}>Cadastrar</button>
                    </div>
                </div>
            </div>
        </>
    )

}