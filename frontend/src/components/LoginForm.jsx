import { useState } from 'react'
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleUsernameChange=({ target }) => setUsername(target.value)
  const handlePasswordChange=({ target }) => setPassword(target.value)
  const addUser=event => {
    event.preventDefault()
    onLogin({ username:username,
      password:password
    })
    setUsername('')
    setPassword('')
  }
  return ( <div>
    <h2>Login</h2>

    <form onSubmit={addUser}>
      <div>
        <label>
            username
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
      </div>
      <div>
        <label>
            password
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <button type="submit">login</button>
    </form>
  </div>
  )
}

export default LoginForm