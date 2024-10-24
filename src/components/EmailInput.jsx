import { useState } from 'react'
export function EmailInput() {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('jestevez1709@gmail.com')
      .then(() => setCopied(true))
      .catch((error) => setError(true))
  }

  return (
    <div>
      <label>Contacto:</label>
      <div className='relative flex justify-center items-center w-auto max-w-72 backdrop-brightness-75 rounded-md'>
        <p id="email" className="bg-transparent focus:outline-none px-2 w-auto">jestevez1709@gmail.com</p>
        <button className='bg-transparent p-3' onClick={handleCopy}>
          <img src="copy.svg" alt="copy-icon" className='size-6'/>
        </button>
        {copied && <span className='absolute -bottom-7 left-2 font-bold text-sky-500'>Copiado!</span>}
        {error && <span className='absolute -bottom-7 left-2 font-bold text-red-500'>No se pudo copiar</span>}
      </div>
    </div>
  )
}