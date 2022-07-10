import React from 'react';
import styles from './styles.scss'
const EditButton = {
  "margin": "0 10px",
  "background": "lightyellow",
}

const RemoveButton = {
  "margin": "0 10px",
  "background": "lightcoral",
}

const UsersTable = (props) => (
  
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Username</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {
                props.users.length > 0 ? (
                  props.users.map(
                    (user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>

                        <td>
                          <button style={EditButton}
                          onClick={
                            () => {
                              props.editRow(user)
                            }
                          }
                          >Editar</button>
                        </td>

                        <td>
                          <button style={RemoveButton}
                          onClick={
                            ()=>{
                              props.deleteUser(user.id)
                            }
                          }>
                            Deletar
                          </button>
                        </td>
                      </tr>

                    )
                  )
                ) :(
                  <tr>
                    <td colSpan={4} >Lista Vazia</td>
                  </tr>
                )
              }
            </tbody>
          </table>
)

export default UsersTable 