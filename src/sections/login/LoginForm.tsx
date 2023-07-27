'use client'

import axiosClient from '@/client/axiosClient'
import { Button, Stack, TextField } from '@mui/material'
import { useState } from 'react'

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleLogin = () => {
    console.log(formData)
    axiosClient
      .post('api/auth/login', formData)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <Stack padding={2} spacing={2}>
      <TextField
        label='Username'
        onChange={e => {
          setFormData({ ...formData, username: e.target.value })
        }}
      />
      <TextField
        label='password'
        onChange={e => {
          setFormData({ ...formData, password: e.target.value })
        }}
      />
      <Button onClick={handleLogin} variant='contained'>
        Login
      </Button>
    </Stack>
  )
}

export default LoginForm
