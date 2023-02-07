
import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts.js'
import { useCatImage } from './hooks/useCatImage'

export default function App () {
  const [fact, setFact] = useState()

  // Para recuperar la imagen cada vez que enviamos una cita [DEJÓ DE FUNCIONAR (BAD GATEWAY)]
  const { imageUrl } = useCatImage({ fact })

  // Para recuperar la cita al cargar la página
  useEffect(() => {
    // getRandomFact().then(fact => setFact(fact))
    getRandomFact().then(setFact)
  }, [])

  const handleClick = () => {
    getRandomFact().then(setFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Cat image extracted using the first word for ${fact}`} />}
        <button onClick={handleClick}>Get new fact</button>
      </section>
    </main>
  )
}
