import { Container } from '@mui/material'
import NextLink from 'next/link'
export default function Home() {
  return (
    <main>
      <Container>
        <h1>Profile</h1>
        <NextLink href='/' legacyBehavior>
          Home
        </NextLink>
      </Container>
    </main>
  )
}
