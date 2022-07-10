import React, {useState}from 'react';

const AddUserForm = (props) => {

    const customLabel = {
        "background-color":"lightgreen"
    }

      const initForm = {id: null, name: "", username:"", email:"", age:null}
      const [user, setUser] = useState(initForm)

      const handleInputChange = (event) => {
            const {name, value} = event.target;

            setUser({...user, [name] : value})

      }
      return(
          <form style={
            {display: 'flex',
            flexDirection: 'column'
          }
          }
          onSubmit={(event) => {
                  event.preventDefault()
                  if(!user.name || !user.username || user.email || user.age){
                    return
                  }
                  props.addUser(user)
                  setUser(initForm)
          }}>
            <label >Nome</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Nome" />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} placeholder="Nome de usuario"/>
            <label>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder='Email'/>
            <label>Idade</label>
            <input type="number" name="age" value={user.age} onChange={handleInputChange} placeholder='Idade'/>
            {/*Arrumar botão registrar*/}
            <button style={customLabel}>Registrar</button>

          </form>
      )
}

export default AddUserForm