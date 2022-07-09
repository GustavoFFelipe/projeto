import React, {useState} from 'react'
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import UsersTable from './UsersTable';

export default function Users(){
  const usersData = [
    {id: 1, name: "Gustavo", username: "Gustavo19", email: 'gustavo.felipe@gmail.com',age: 28},
    {id: 2, name: "Isabelli", username: "Bell", email: 'isabelli.felipe@gmail.com',age: 26}
  ]
  const initForm = {id: null, name:'' ,username: '',email:"",  age: null}

  const [users, setUsers] = useState(usersData)

  const [currentUser, setCurrentUser] = useState(initForm)

  const [editing, setEditing] = useState(false)

  const addUser = (user) => {
    user.id = users.length+1;

    setUsers(...users, user)
  }

  const deleteUser = (id) => {
    setEditing(false)
    setUsers(users.filter((user) => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map( user => (user.id === id ? updatedUser : user)))
  } 
  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username, email: user.email, age: user.age})
  }

  return(
    <div>
      <h2>Cadastro de Usuarios</h2>
      <div>
        <div>
          {
            editing ? (
              <div>
                <h3>Editar Usuarios</h3>
                <EditUserForm 
                  editing = {editing}
                  setEditing= {setEditing}
                  currentUser = {currentUser}
                  updateUser= {updateUser}

                />
              </div>

            ):(
              <div>
                <h3>Adicionar Usuarios</h3>
                <AddUserForm
                  addUser= {addUser}
                />
              </div>
            )
          }
        </div>
        <div>
          <h3>Lista de Usuarios</h3>
          <UsersTable 
          users = {users}
          editRow = {editRow}
          deleteUser = {deleteUser}

          />
        </div>
      </div>
    </div>
  )
}