import { useState } from 'react'

const JsonFetchDemo = () => {
  const [url, setUrl] = useState('http://localhost:7070/data')

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
      <p>Текущий url: {url}</p>
    </div>
  )
}

export default JsonFetchDemo
