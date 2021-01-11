import React, { useEffect } from 'react'

import NumberInput from './components/NumberInput'

import useBinary from './hooks/useBinary'
import useDecimal from './hooks/useDecimal'

import binaryToDecimal from './utils/binaryToDecimal'
import decimalToBinary from './utils/decimalToBinary'

import './App.css'

const App: React.FC = () => {
  const { binary, handleBinary } = useBinary()
  const { decimal, handleDecimal } = useDecimal()

  useEffect(() => {
    if (binary === undefined) return

    handleDecimal(binaryToDecimal(binary))
  }, [binary, handleDecimal])

  useEffect(() => {
    if (decimal === undefined) return

    handleBinary(decimalToBinary(decimal))
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
