import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const SignIn = () => {
  // variable
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })
  const [isShowPassword, toggleIsShowPassword] = useState(false)
  let navigate = useNavigate()

  // Function
  const handlePasswordToggle = (e) => {
    if (e.target.checked) {
      toggleIsShowPassword(true)
      setFormValues({ ...formValues, confirmPassword: '' })
    } else {
      toggleIsShowPassword(false)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    //do await login function for user
    setFormValues({
      email: '',
      password: ''
    })
    navigate('/')
  }

  const handleRegister = () => {
    navigate('/register')
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  // Render
  let passwordFieldRender = (
    <div>
      <label>Password:</label>{' '}
      <input
        onChange={handleChange}
        value={formValues.password}
        name="password"
        type="password"
        required
      />
      <input
        onChange={handlePasswordToggle}
        value={isShowPassword}
        name="isShowPassword"
        type="checkbox"
      />
      <label>Show Password</label>
      <br />
    </div>
  )
  if (isShowPassword) {
    passwordFieldRender = (
      <div>
        <label>Password:</label>{' '}
        <input
          onChange={handleChange}
          value={formValues.password}
          name="password"
          type="text"
          required
        />
        <input
          onChange={handlePasswordToggle}
          value={isShowPassword}
          name="isShowPassword"
          type="checkbox"
        />
        <label>Show Password</label>
        <br />
      </div>
    )
  }

  let signInRender = (
    <div className="signin-container">
      <div className="signin-form">Please Sign-in</div>
      <form onSubmit={handleSubmit} className="signin-form">
        <label>Email: </label>{' '}
        <input
          onChange={handleChange}
          value={formValues.email}
          name="email"
          type="email"
          placeholder="john.doe@email.com"
        />
        <br />
        {passwordFieldRender}
        <button className="login-button">Login</button>
      </form>
      <div className="signin-form">
        Don't have account?{' '}
        <button onClick={handleRegister} className="create-button">
          Create account
        </button>
      </div>
    </div>
  )
  let toRender = (
    <div>
      <div>This is a sign in page</div>
      {signInRender}
    </div>
  )
  return toRender
}

export default SignIn
