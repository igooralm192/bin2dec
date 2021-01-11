import { useCallback, useState } from 'react'

interface ReturnType {
  binary: string | undefined
  handleBinary: (value: string | number) => void
}

const useBinary = (): ReturnType => {
  const [binary, setBinary] = useState<string>()

  const handleBinary = useCallback((value: string | number) => {
    if (value === undefined) return

    const serializedValue = String(value)
      .split('')
      .map(digit => Number(digit))
      .filter(digit => digit <= 1)
      .join('')

    setBinary(oldBinary => {
      if (String(value) === oldBinary) return oldBinary

      return serializedValue
    })
  }, [])

  return {
    binary,
    handleBinary,
  }
}

export default useBinary
