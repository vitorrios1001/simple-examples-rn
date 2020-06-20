import axios from 'axios'

import { TOKEN } from 'react-native-dotenv'

/**
 * Create token in link: https://gorest.co.in/
 */

const api = axios.create({
  baseURL: 'https://gorest.co.in/public-api',
  headers: {
    'Authorization': `Bearer ${TOKEN}`
  }
})

export default api
