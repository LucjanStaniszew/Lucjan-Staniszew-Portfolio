import "./contact.scss";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import swal from 'sweetalert';


function validate(datos){
  let errors = {};

  if (!datos.user_subject){
      errors.user_subject ="Ingresa el Asunto"
  } else if( !datos.user_mail){
      errors.user_mail = "Ingresa el Mail"
  }
  return errors;
}

export default function Contact() {
const form =useRef();
const [send, setSend] = useState(false)
const [ errors, setErrors ] = useState({});
const [empty, setEmpty] = useState({
name: undefined,
phone: undefined,
mail: undefined,
subject: undefined,
message: undefined
})

let handleChange = (e) => {
  setEmpty({
      ...empty,
      [e.target.name] : e.target.value
  })
  setErrors(validate({
      ...empty,
      [e.target.name] : e.target.value
  }))
}

const sendEmail = (e) => {
  e.preventDefault();
  setErrors(validate(empty))
if (empty.user_mail && empty.user_subject){ 
   emailjs.sendForm('service_j5bg2fa', 'template_fxxt0rn', form.current, 'user_No7Wk2Xmmcxmswl29wqsY')
    .then((result) => {
        console.log(result.text);
        setSend(true)
        setEmpty({
          name: '',
          phone: '',
          mail: '',
          subject:'',
          message: ''
        })
    }, (error) => {
        console.log(error.text);
        
    });
  } else {
    swal("Atención!","Faltan campos por completar")
  }
};
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/acuerdo.png" alt="" />
      </div>
      <div className="right">{
        !send &&
      <form className='form' ref={form} onSubmit={sendEmail}>
            <input className='name' placeholder="Nombre" name="user_name" value={empty.name} onChange={(e) => handleChange(e)} />
            <input className='name' placeholder="N° Teléfono" name='user_phone' value={empty.phone} onChange={(e) => handleChange(e)}/>
            <input className='name' placeholder="Email" name='user_mail' value={empty.mail} onChange={(e) => handleChange(e)}/>
            {errors.user_mail && (errors.user_mail)}
            <input className='name' placeholder="Asunto" name='user_subject' value={empty.subject} onChange={(e) => handleChange(e)}/>
            {errors.user_subject && (errors.user_subject)}
            <textarea className='' placeholder="Mensaje" rows={6} name='message' value={empty.message} onChange={(e) => handleChange(e)}/>
            <button className='button'>Enviar</button>
        </form>}
        { send &&
            <div className="overflow">
            <span>  Gracias!!! Conversamos Pronto :) <img src="/assets/besos.png" alt="" height={350} width={350} /></span>
            </div>
            }
      </div>
    </div>
  );
}


