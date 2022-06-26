import { it, vi, expect } from 'vitest'

import { sendDataRequest } from './http'

const testResponseData = { testKey: 'testData' }

const testFetch = vi.fn((_url, _options) => {
  return new Promise((resolve, _reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, _reject) => {
          resolve(testResponseData)
        })
      },
    }
    resolve(testResponse)
  })
})

vi.stubGlobal('fetch', testFetch)

it('should return any available response data', () => {
  const testData = { key: 'test' }

  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData)
})
