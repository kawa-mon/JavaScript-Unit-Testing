import { expect } from 'chai'
import { it } from 'vitest'
import { generateToken } from './async-example'

it('should generate a token', () => {
  const testUserEmail = 'test@test.com'

  generateToken(testUserEmail, (err, token) => {
    // expect(token).toBeDefined()
    expect(token).toBe(2)
  })
})
