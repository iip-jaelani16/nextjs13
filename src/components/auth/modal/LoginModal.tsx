'use client'

import { Button, Dialog, DialogContent } from '@mui/material'
import { useRouter } from 'next/navigation'
export default function LoginModal() {
  const router = useRouter()
  const handleClose = () => {
    router.back()
  }
  return (
    <main>
      <Dialog open fullWidth maxWidth='md' onClose={handleClose}>
        <DialogContent>
          <Button onClick={handleClose}>Close</Button>
          <h1>LoginModal</h1>
          Laborum deserunt quis in consectetur quis eu magna proident. Eu
          officia qui occaecat esse nulla. Est elit minim laborum voluptate aute
          ipsum do. Ullamco nostrud non duis esse consectetur cillum et irure
          voluptate do esse.
        </DialogContent>
      </Dialog>
    </main>
  )
}
