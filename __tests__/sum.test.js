const sum = require('../src/sum')

describe('Sum function', () => {
    it('should add 1 + 5 = 6', () => {
        expect(sum(1, 5)).toBe(6)
    })
})