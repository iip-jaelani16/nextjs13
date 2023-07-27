import { MovieDetail } from '@/@types/movie'
import axiosClient from '@/client/axiosClient'
import DialogDetail from '@/sections/movie/detail/DialogDetail'

async function getMovieDetail({ id }: { id: string }): Promise<MovieDetail> {
  const response = await axiosClient.get(`/3/movie/${id}`)
  return response.data
}

export default async function MovieDetailModal({
  params,
}: {
  params: { id: string }
}) {
  const movie = await getMovieDetail({ id: params.id })

  return (
    <main>
      <DialogDetail movie={movie} />
    </main>
  )
}
