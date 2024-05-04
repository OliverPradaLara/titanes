import React from 'react'

export const Form = () => {
  return (
    <>
    
    <div className='div-titulo'>
    <h1> Crud Titanes de Acero</h1>
     </div>

     <div className='container'> 

      <form action='#' id='formulario'>
         <input type="text" id = 'id' placeholder='Id' />
         <input type="text" id = 'name' placeholder='Ingrese un nombre' />
         <input type="email" id = 'email' placeholder='Ingrese su correo' />
         <input type="text" id = 'city' placeholder='Ciudad' />
         <input type="text" id = 'username' placeholder='Username' />
         <input type="text" id = 'wedsite' placeholder='wedsite' />
     </form>

     </div>

   
    
    
    
    </>
  )
}

