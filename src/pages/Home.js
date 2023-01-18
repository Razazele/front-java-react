import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Home = () => {

  const hosting = process.env.REACT_APP_BACKEND_JAVA


  const [users, setUsers] = useState([])
  const {id} = useParams();

  useEffect(() => {
    loadUsers()


  },[])

  const loadUsers=async () => {
    const result = await axios.get(`${hosting}/users`)

     setUsers(result.data)
  }

  const deleteUser = async (id) => {
    await axios.delete(`${hosting}/user/${id}`)
    loadUsers()
  }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {

        users.map((user,index) => {
           return <tr key={index}>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link to={`/viewuser/${user.id}`} className='btn btn-primary mx-2'>Ver</Link>
                <Link to={`/edituser/${user.id}`} className='btn btn-outline-primary mx-2'>Editar</Link>
                <button onClick={() => deleteUser(user.id)} className='btn btn-danger mx-2'>Borrar</button>
            </td>
          </tr>
        })

    }


  </tbody>
</table>
        </div>
    </div>
  )
}

export default Home