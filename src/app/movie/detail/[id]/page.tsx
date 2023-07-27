import { MovieDetail } from '@/@types/movie'
import axiosClient from '@/client/axiosClient'
import { Box, Container } from '@mui/material'
import Image from 'next/image'

async function getMovieDetail({ id }: { id: string }): Promise<MovieDetail> {
  const response = await axiosClient.get(`/3/movie/${id}`)
  return response.data
}

async function MovieDetailPage({ params }: { params: { id: string } }) {
  const {
    adult,
    backdrop_path,
    belongs_to_collection,
    budget,
    genres,
    homepage,
    id,
    imdb_id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
    tagline,
    title,
    video,
    vote_average,
    vote_count,
  } = await getMovieDetail({ id: params.id })

  return (
    <main>
      <Box
        sx={{
          position: 'relative',
          pb: '60%',
        }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          fill
          alt={title}
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
      </Box>
      <Container>
        Cupidatat ad nostrud ullamco exercitation ipsum officia. Consequat culpa
        in labore ut eiusmod labore ipsum eiusmod. Incididunt consectetur
        commodo ex commodo cupidatat enim deserunt ad exercitation esse irure
        nisi irure.
      </Container>
    </main>
  )
}

export default MovieDetailPage
