import LoginForm from '@/sections/login/LoginForm'
import { Container } from '@mui/material'
import requestLogin from './_lib/requestLogin'
export default function Page() {
  requestLogin('dada da da')
  return (
    <main>
      <Container>
        <h1>Login page</h1>
        <LoginForm />
      </Container>
    </main>
  )
}
