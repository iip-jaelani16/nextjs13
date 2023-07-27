import { Container } from '@mui/material'
import NextLink from 'next/link'
export default function Page() {
  return (
    <main>
      <Container>
        <h1>Register</h1>
        <NextLink href='/' legacyBehavior>
          Home
        </NextLink>
      </Container>
    </main>
  )
}
