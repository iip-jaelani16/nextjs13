import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWVlMGFlZjA0MTUxZTJjYjkxMWRiNWNlZDFhNmQ1ZiIsInN1YiI6IjVlMzMyZTk2OThmMWYxMDAxMjAwZjllYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tfbL5UY_QAMMwS5nTmC4VELtfclq9G-MXPI-BvL54LA`,
  },
})

export default axiosClient
