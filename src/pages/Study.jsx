import { useEffect } from 'react'
import { useState } from 'react'
import CardAnnotation from '../Components/CardAnnotation'
import CreateAnnotation from '../Components/CreateAnnotation/Index'
import Infomation from '../Components/Information'
import './studypage.css'

export default function StudyPage(){
    const [cadastro,setCadastro] = useState(false)


    //pegar todos as anotações
    useEffect(()=>{
      
    },[])


    return(
        <>
          <div className='studyPage'>
                {cadastro?<CreateAnnotation mudar={setCadastro}/>:""}
                <div className='card-annotation-area'>
                    <h2>
                      Suas Materias para estudo
                    </h2>
                    <button className='btn-index' onClick={()=> setCadastro(true)}>
                      Cadastrar Nova
                    </button>
                    <section className='container-annotations'>
                      <CardAnnotation/>
                      <CardAnnotation/>
                      <CardAnnotation/>
                      <CardAnnotation/>
                      <CardAnnotation/>
                      <CardAnnotation/>
                      <CardAnnotation/>
                      <CardAnnotation/>
                      <CardAnnotation/>
                    </section>
                </div>

                <div className='InfoCampo'> 
                  <Infomation/>
                </div>
          </div>
        </>
)
}
