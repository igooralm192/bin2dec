import React, { useEffect } from 'react'

import NumberInput from './components/NumberInput'
import useBinary from './hooks/useBinary'
import useDecimal from './hooks/useDecimal'

import './App.css'

const App: React.FC = () => {
  const { binary, handleBinary } = useBinary()
  const { decimal, handleDecimal } = useDecimal()

  useEffect(() => {
    if (binary === undefined) return

    const binaryDigits = String(binary)
      .split('')
      .map(digit => Number(digit))

    let convertedDecimal = 0

    for (let i = 0; i < binaryDigits.length; i += 1) {
      const digit = binaryDigits[i]

      convertedDecimal += digit * 2 ** (binaryDigits.length - i - 1)
    }

    handleDecimal(convertedDecimal)
  }, [binary, handleDecimal])

  useEffect(() => {
    if (decimal === undefined) return

    let value = decimal

    let convertedBinary = ''

    while (value > 0) {
      convertedBinary = (value % 2) + convertedBinary
      value = Math.floor(value / 2)
    }

    if (convertedBinary === '') convertedBinary = '0'

    handleBinary(convertedBinary)
  }, [decimal, handleBinary])

  return (
    <main className="main-container">
      <div className="main-content">
        <h1 className="main-title">Bin2Dec</h1>
        <h5 className="main-description">O seu conversor predileto!</h5>

        <p>Digite em qualquer um dos campos para realizar a conversão.</p>

        <div className="inputs-container">
          <NumberInput
            placeholder="Binário"
            value={binary ?? ''}
            onChange={handleBinary}
          />
          <NumberInput
            placeholder="Decimal"
            value={decimal ?? ''}
            onChange={handleDecimal}
          />
        </div>
      </div>
    </main>
  )
}

export default App
