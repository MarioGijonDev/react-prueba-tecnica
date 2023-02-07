
import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export default function App () {
  // Para recuperar la cita y la funcion para refrescar la cita
  const { fact, refreshFact } = useCatFact()

  // Para recuperar la imagen cada vez que enviamos una nueva cita [DEJÓ DE FUNCIONAR (BAD GATEWAY)]
  const { imageUrl } = useCatImage({ fact })

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Cat image extracted using the first word for ${fact}`} />}
        <button onClick={refreshFact}>Get new fact</button>
      </section>
    </main>
  )
}
