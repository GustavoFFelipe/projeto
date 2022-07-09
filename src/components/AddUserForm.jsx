import React, {useState}from 'react';

const AddUserForm = (props) => {
      const initForm = {id: null, name: "", username:"", email:"", age:null}
      const [user, setUser] = useState(initForm)

      const handleInputChange = (event) => {
            const {name, value} = event.target;

            setUser({...user, [name] : value})

      }
      return(
          <form onSubmit={(event) => {
                  event.preventDefault()
                  if(!user.name || !user.username || user.email || user.age)
                      return
                  props.addUser(user)
                  setUser(initForm)
          }}>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Nome" />
            <input type="text" name="username" value={user.username} onChange={handleInputChange} placeholder="Nome de usuario"/>
            <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder='Email'/>
            <input type="number" name="age" value={user.age} onChange={handleInputChange} placeholder='Idade'/>

            <button>Registrar</button>

          </form>
      )
}

export default AddUserForm