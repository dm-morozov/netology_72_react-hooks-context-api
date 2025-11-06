import { useEffect, useState } from 'react'

const useJsonFetch = <T = unknown,>(
  url: string,
  opts?: RequestInit
): [T | null, boolean, string | null] => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log('useJsonFetch вызван с URL:', url)

    setLoading(true)
    setData(null)
    setError(null)

    const controller = new AbortController()

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          ...opts,
          signal: controller.signal,
        })
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }
        const result = await response.json()
        setData(result)
        setLoading(false)
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError('Ошибка: ' + err.message)
        } else {
          setError('Неизвестная ошибка')
        }
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [url, opts])
  return [data, loading, error]
}

export default useJsonFetch
