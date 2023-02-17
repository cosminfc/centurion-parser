import { greeting } from '../src'

describe('test greeting function', () => {
    it('should return "Hello World"', () => {
        expect(greeting()).toBe('Hello World')
    })
})
