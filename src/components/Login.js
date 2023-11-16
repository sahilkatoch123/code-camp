import React, { useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    isRobot:true
  })
console.log(formData)
  const handleChange = (e) => {
    setFormData(preFormData => {
      const { name, value, type, checked } = e.target
      return {
        ...preFormData,
        [name]: type === 'chekbox' ? checked : value
      }
    })
  }

  // const handleSubmit=(e)=>{
  //   e.preventDefault()  
    
  // }

  return (
    <div>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" /*onSubmit={handleSubmit}*/>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            {/* username------------- */}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"
              name='username'
              onChange={handleChange}
              type="text"
              value={formData.username}
              placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            {/* password------------------ */}
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name='password'
              onChange={handleChange}
              value={formData.password}
              id="password"
              type="password"
              placeholder="********" />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
            {/* checkbox------------------ */}


          <div className="flex mb-6">
          <input
                    type="checkbox"
                    name="isRobot"
                    id="isRobot"
                    onChange={handleChange}
                    checked={formData.isFriendly} />
                <label htmlFor="isRobot">are you sure</label>
          </div>


          {/* signup-------------------- */}
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onChange={handleChange}>
              Sign In
            </button>
            {/* forgot password--------------- */}
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
