import { Container } from '@mui/material'

export default function Layout({
  children,
  information,
}: {
  children: React.ReactNode
  information: React.ReactNode
}) {
  return (
    <Container>
      {information}
      {children}
    </Container>
  )
}
