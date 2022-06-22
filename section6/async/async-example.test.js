import { expect } from 'chai'
import { it } from 'vitest'
import { generateToken } from './async-example'

it('should generate a token', (done) => {
  const testUserEmail = 'test@test.com'

  generateToken(testUserEmail, (_err, token) => {
    try {
      expect(token).toBeDefined()
      // expect(token).toBe(2)
      done()
    } catch (error) {
      done(error)
    }
  })
})
