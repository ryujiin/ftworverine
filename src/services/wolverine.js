import * as axios from 'axios'

const BASE_URL = 'https://thawing-plateau-43612.herokuapp.com'

export default {
  getLogin (data){
    const url = `${BASE_URL}/api-login/`
    return axios.post(url, data)
      .then(res => res.data)
      .catch(err => err.data)
  }
}
