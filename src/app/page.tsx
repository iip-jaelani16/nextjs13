import { PopularMoveType } from '@/@types/movie'
import axiosClient from '@/client/axiosClient'
import { Box, Card, Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

async function popularMovie(): Promise<PopularMoveType> {
  const response = await axiosClient.get('/3/movie/popular')
  return response.data
}

export default async function Home() {
  const { results } = await popularMovie()

  return (
    <main>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 2,
          }}
        >
          {results.map((movie, index) => (
            <Link key={index.toString()} href={`/movie/detail/${movie.id}`}>
              <Card
                elevation={0}
                sx={{
                  position: 'relative',
                  pb: '150%',
                }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                  }}
                />
              </Card>
            </Link>
          ))}
        </Box>
      </Container>
    </main>
  )
}
