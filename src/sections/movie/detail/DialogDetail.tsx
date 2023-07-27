'use client'

import { MovieDetail } from '@/@types/movie'
import { Box, Dialog } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function DialogDetail({ movie }: { movie: MovieDetail }) {
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
  } = movie
  const router = useRouter()
  const handleClose = () => {
    router.back()
  }
  return (
    <Dialog open fullWidth maxWidth='md' onClose={handleClose}>
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
    </Dialog>
  )
}

export default DialogDetail
