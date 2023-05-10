import { Method } from '@/types'
import axios from 'axios'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export function useFetchApi<T>(
  url: string,
  params?: string
): [T, Dispatch<SetStateAction<T>>, number] {
  const [data, setData] = useState<T>()
  const [status, setStatus] = useState<number>()

  useEffect(() => {
    axios<T>({
      method: Method.GET,
      url: params ? url + params : url,
      headers: { Authorization: '' },
    }).then((response) => {
      switch (response.status) {
        default:
          setData(response?.data)
          setStatus(response?.status)
          break
      }
    })
  }, [url, params])

  return [data, setData, status]
}
