import { useEffect, useState, type FC } from 'react'
import style from './Details.module.css'

interface DetailsProps {
  userId: number
}

interface UserDetails {
  id: number
  name: string
  avatar: string
  details: DetailsUserProps
}

interface DetailsUserProps {
  city: string
  company: string
  position: string
}

const Details: FC<DetailsProps> = ({ userId }) => {
  const [details, setDetails] = useState<UserDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    setLoading(true)
    setError(null)
    const fetchDetails = async () => {
      try {
        const responce = await fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userId}.json`
        )
        if (!responce.ok) {
          throw new Error('Не удалось загрузить')
        }
        const data: UserDetails = await responce.json()
        setDetails(data)
        setLoading(false)
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.name !== 'AbortError') {
            setError(err.message)
            setLoading(false)
          }
        }
      }
    }
    fetchDetails()
  }, [userId])

  if (loading) return <div className={style.loading}>Загрузка</div>
  if (error) return <div className={style.error}>Ошибка: {error}</div>

  if (!details) return null

  return (
    <div className={style.details}>
      <img src={details.avatar} alt={details.name} className={style.avatar} />
      <h2>{details.name}</h2>
      <p>Город: {details.details.city}</p>
      <p>Компания: {details.details.company}</p>
      <p>Должность: {details.details.position}</p>
    </div>
  )
}

export default Details
