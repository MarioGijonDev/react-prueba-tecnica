
import { useEffect, useState } from 'react'

export default function ScrollToTop () {
  const [hide, setHide] = useState('none')

  const handleClickScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    console.log(hide)
    const scrollToTopEffect = () => {
      if (window.scrollY > 400) {
        setHide('block')
      } else {
        setHide('none')
      }
    }
    window.addEventListener('scroll', scrollToTopEffect)
    return () => {
      window.removeEventListener('scroll', scrollToTopEffect)
    }
  }, [hide])

  return (
    <button style={{ display: hide }} onClick={handleClickScrollToTop} className='scrollToTop'>Up</button>
  )
}
