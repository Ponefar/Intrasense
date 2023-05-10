export function firstLetterUppercase(val: string): string {
  if (val.length === 0) {
    return ''
  }
  const [firstLetter, ...rest] = val.split('')
  return firstLetter.toUpperCase() + rest.join('')
}

export function firstLetterLowerCase(val: string): string {
  if (val.length === 0) {
    return ''
  }
  const [firstLetter, ...rest] = val.split('')
  return firstLetter.toLowerCase() + rest.join('')
}
