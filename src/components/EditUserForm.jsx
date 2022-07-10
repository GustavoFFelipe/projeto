import React, {useEffect, useState} from 'react';


const EditForm = {
  "display": "flex",
  "flex-direction": "column",
}
const Update = {
  "background-color":"lightgreen"
}
const Remove = {
  "background-color":"lightcoral"
}

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [props]
  ) 

  const handleInputChange = (event) => {
      const { name, value} = event.target

      setUser({...user, [name]: value})
  }

  return(
    <form style = {EditForm}
    onSubmit={
      (event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }
    }>
      <label >Nome</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Nome" />
      <label >Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} placeholder="Nome de usuario"/>
      <label >Email</label>
      <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder='Email'/>
      <label >Idade</label>
      <input type="number" name="age" value={user.age} onChange={handleInputChange} placeholder='Idade'/>
      <button style={Update}>Atualizar</button>
      <button style={Remove}
       onClick={
        () => {
          props.setEditing(false)
        }
      }>Cancelar</button>
    </form>
  )
}
export default EditUserForm