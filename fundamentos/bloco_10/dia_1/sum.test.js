const sum = require('./sum');

describe('Soma dois valores numéricos', () => {
    it('sum(4, 5) retorna 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
    it('sum(0, 0) retorna 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    it('sum(4, "5") retorna erro ao receber string como parâmetro', () => {
        expect(() => {
            sum(4, '5').toThrow();
        })
    })
    it('sum(4, "5") retorna "parameters must be numbers" ao receber string como parâmetro', () => {
        expect(() => {
            sum(4, '5').toThrow('parameters must be numbers');
        })
    })
});