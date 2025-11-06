// hooks/types.ts

export type UseJsonFetchResult<T> = [T | null, boolean, string | null]

export interface useJsonFetchProps {
  url: string
  opts?: RequestInit
}
