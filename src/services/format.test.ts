import { firstLetterLowerCase, firstLetterUppercase } from './format'
import { describe, expect, it } from '@jest/globals'

describe('FirstLetterUppercase', () => {
  it('should return a string with first letter uppercase', () => {
    const input = 'hello world'
    const expectedOutput = 'Hello world'
    expect(firstLetterUppercase(input)).toEqual(expectedOutput)
  })

  it('should handle empty string', () => {
    const input = ''
    const expectedOutput = ''
    expect(firstLetterUppercase(input)).toEqual(expectedOutput)
  })
})

describe('FirstLetterLowerCase', () => {
  it('should return a string with first letter lowercase', () => {
    const input = 'Hello world'
    const expectedOutput = 'hello world'
    expect(firstLetterLowerCase(input)).toEqual(expectedOutput)
  })

  it('should handle empty string', () => {
    const input = ''
    const expectedOutput = ''
    expect(firstLetterLowerCase(input)).toEqual(expectedOutput)
  })
})
