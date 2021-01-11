export default function binaryToDecimal(binary: string): number {
  const binaryDigits = String(binary)
    .split('')
    .map(digit => Number(digit))

  let convertedDecimal = 0

  for (let i = 0; i < binaryDigits.length; i += 1) {
    const digit = binaryDigits[i]

    convertedDecimal += digit * 2 ** (binaryDigits.length - i - 1)
  }

  return convertedDecimal
}
