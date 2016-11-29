import {
    sum,
    minus
} from '../src/sum';

describe('sum function', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
    it('minus 2 - 1 to equal 1', () => {
        expect(minus(2, 1)).toBe(1)
    })
})