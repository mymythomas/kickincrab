import axios from 'axios'


// This is to register new users
// don't really need this?
export const register = newUser => {
    return axios
    .post('users/register', {
        username: newUser.username,
        password: newUser.password
    })
    .then(response => {
        console.log('Registered')
    })
}

// accepting an object named 'user'
// then it's passed to the axios post method
// with the path of /login

// token is an encoded string with the information
export const login = user => {
    return axios
    .post('api/login', {
        username: user.username,
        password: user.password
    })
    .then(response => {
        localStorage.setItem('usertoken', response.data)
        console.log(response.data)
        return response.data
    })
    .catch(err=> {
        console.log(err)
    })
}

export const getProfile = token => {
    return axios
      .get('api/employer', {
        headers: { Authorization: ` ${token}` }
      })
      .then(response => {
        console.log(response)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }