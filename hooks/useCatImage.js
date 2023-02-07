
import { useEffect, useState } from 'react'

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/' // [DEJÓ DE FUNCIONAR (BAD GATEWAY)]

// Para recuperar la imagen cada vez que enviamos una cita [DEJÓ DE FUNCIONAR (BAD GATEWAY)]
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    fetch(CAT_ENDPOINT_IMAGE_URL + firstWord)
      .then(res => {
        setImageUrl(res.url)
      })
  }, [fact])

  return { imageUrl }
}
