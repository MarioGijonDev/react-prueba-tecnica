
import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts.js'

// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/' [DEJÓ DE FUNCIONAR (BAD GATEWAY)]

export default function App () {
  const [fact, setFact] = useState()
  // const [imageUrl, setImageUrl] = useState()

  // Para recuperar la cita al cargar la página
  useEffect(() => {
    // getRandomFact().then(fact => setFact(fact))
    getRandomFact().then(setFact)
  }, [])

  // Para recuperar la imagen cada vez que tenemos una cita nueva [DEJÓ DE FUNCIONAR (BAD GATEWAY)]
  /*
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    fetch(CAT_ENDPOINT_IMAGE_URL + firstWord)
      .then(res => {
        setImageUrl(res.url)
      })
  }, [fact])
  */
  const handleClick = () => {
    getRandomFact().then(setFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {/*
          {imageUrl && <img src={imageUrl} alt={`Cat image extracted using the first word for ${fact}`} />}
        */}
        <button onClick={handleClick}>Get new fact</button>
      </section>
    </main>
  )
}
