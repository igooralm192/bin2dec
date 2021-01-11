import { useCallback, useState } from 'react'

interface ReturnType {
  decimal: number | undefined
  handleDecimal: (value: string | number) => void
}

const useDecimal = (): ReturnType => {
  const [decimal, setDecimal] = useState<number>()

  const handleDecimal = useCallback((value: string | number) => {
    if (value === undefined) return

    setDecimal(oldDecimal => {
      if (Number(value) === oldDecimal) return oldDecimal
      return Number(value)
    })
  }, [])

  return {
    decimal,
    handleDecimal,
  }
}

export default useDecimal
