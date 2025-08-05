import { describe, expect, it } from 'vitest'
import { sum } from './sum'

describe('sum function', () => {
  it('adds 2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5)
  })
})
