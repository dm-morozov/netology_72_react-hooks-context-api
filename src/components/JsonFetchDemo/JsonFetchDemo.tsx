import { useState } from 'react'
import useJsonFetch from '../../hooks/useJsonFetch'

const JsonFetchDemo = () => {
  const [url, setUrl] = useState(
    'https://netology-72-react-hooks-context-api.onrender.com/error'
  )
  const [data, loading, error] = useJsonFetch<{ status: string }>(url)

  return (
    <div>
      <h2>JsonFetchDemo - test</h2>
      <button
        onClick={() =>
          setUrl(
            'https://netology-72-react-hooks-context-api.onrender.com/data'
          )
        }
      >
        Загрузить данные
      </button>
      <button
        onClick={() =>
          setUrl(
            'https://netology-72-react-hooks-context-api.onrender.com/error'
          )
        }
      >
        Ошибка
      </button>
      <button
        onClick={() =>
          setUrl(
            'https://netology-72-react-hooks-context-api.onrender.com/loading'
          )
        }
      >
        Долгая загрузка
      </button>
      <div style={{ marginTop: 20 }}>
        {loading && <p>Загрузка...</p>}
        {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  )
}

export default JsonFetchDemo
