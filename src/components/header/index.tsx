import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import NextLink from 'next/link'

const HeaderComponent = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          |||
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Stack direction='row' spacing={2}>
          <NextLink href='/profile' legacyBehavior>
            Profile
          </NextLink>
          <NextLink href='/login' legacyBehavior>
            Login
          </NextLink>
          <NextLink href='/register' legacyBehavior>
            Register
          </NextLink>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderComponent
