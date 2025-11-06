import { useState } from 'react'
import useJsonFetch from '../../hooks/useJsonFetch'

const JsonFetchDemo = () => {
  const [url, setUrl] = useState('http://localhost:7070/data')
  const [data, loading, error] = useJsonFetch<{ status: string }>(url)

  return (
    <div>
      <h2>JsonFetchDemo - test</h2>
      <button onClick={() => setUrl('http://localhost:7070/data')}>
        Загрузить данные
      </button>
      <button onClick={() => setUrl('http://localhost:7070/error')}>
        Ошибка
      </button>
      <button onClick={() => setUrl('http://localhost:7070/loading')}>
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
