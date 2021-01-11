export default function decimalToBinary(decimal: number): string {
  let value = decimal

  let convertedBinary = ''

  while (value > 0) {
    convertedBinary = (value % 2) + convertedBinary
    value = Math.floor(value / 2)
  }

  if (convertedBinary === '') convertedBinary = '0'

  return convertedBinary
}
