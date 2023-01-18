import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {



    const {id} = useParams()

   const [user, setUser] = useState({
    name:"",
    username:"",
    email:""
   })

   const {name,username,email} = user

   let navigate = useNavigate()

   const onInputChange=(e) => {
     setUser({...user,[e.target.name]:e.target.value})
   }


   useEffect(() => {
    loadUser()
    },[])

   const onSubmit= async (e) => {

    e.preventDefault()

    await axios.put(`http://localhost:8080/user/${id}`,user)
    navigate('/')
   }

   const loadUser =  async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
   }

  return (
    <div className='container' >
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <div className='text-center'>Editar Usuario</div>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Nombre
                    </label>
                    <input type={"text"} onChange={(e) => onInputChange(e)} value={name} className="form-control" placeholder='Ingresa tu nombre' name="name"/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='username' className='form-label'>
                        Nombre del Usuario
                    </label>
                    <input type={"text"} onChange={(e) => onInputChange(e)} value={username} className="form-control" placeholder='Ingresa tu nombre de usuario' name="username"/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                        Correo Electronico
                    </label>
                    <input type={"email"} value={email} onChange={(e) => onInputChange(e)} className="form-control" placeholder='Ingresa tu Correo' name="email"/>
                </div>
                <button  type='submit' className='btn btn-outline-primary'>Confirmar </button>
                <Link to={'/'}  className='btn btn-outline-danger mx-2'>Cancelar</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditUser