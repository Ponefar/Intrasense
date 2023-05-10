import React from 'react'
import { render } from '@testing-library/react'
import Title from './Title'
import { describe, expect, it } from '@jest/globals'

describe('Alert', () => {
  it('match snapshot', () => {
    const view = render(<Title>Salut</Title>)
    expect(view).toMatchSnapshot()
  })
})
