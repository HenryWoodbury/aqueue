import { useGetRostersQuery } from '../../services/rosters'
import { BASE_URL } from '../../services/api.ts'
// import { IRoster } from '../../types/rosters.ts'

const Download = () => {

  const { 
    data: rosters, 
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetRostersQuery()

  const rostersUrl = `${BASE_URL}rosters/download`;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(rostersUrl);
  }

  return (
    <section>
      <h2>Download Rosters</h2>
      <button onClick={handleDownload} disabled={!rosters || rosters.length === 0}>
        Download Rosters
      </button>
    </section>
  )
}

export { Download }