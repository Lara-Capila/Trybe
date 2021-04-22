const encode = require('./encode');
const decode = require('./decode');

describe('codifica a string recebida, trocando determinadas letras por números', () => {
    it('verifica se encode é uma função', () => {
        expect(typeof encode).toEqual('function');
        expect(typeof decode).toEqual('function');
    });
    it('verifica se a letra "a" é substituída pelo número 1', () => {
        expect(encode('lara')).toEqual('l1r1');
    });
    it('verifica se a letra "e" é substituída pelo número 2', () => {
        expect(encode('ele')).toEqual('2l2');
    });
    it('verifica se a letra "i" é substituída pelo número 3', () => {
        expect(encode('vixi')).toEqual('v3x3');
    });
    it('verifica se a letra "o" é substituída pelo número 4', () => {
        expect(encode('ovo')).toEqual('4v4');
    });
    it('verifica se a letra "u" é substituída pelo número 5', () => {
        expect(encode('urubu')).toEqual('5r5b5');
    });
    it('verifica se a string retornada tem o mesmo tamanho do string passada como parâmetro', () => {
        expect(encode('lara').length).toEqual(4);
    });
})

describe('decodifica a string recebida, trocando determinadas números por letras', () => {
    it('verifica se o número "1" é substituída pela letra "a"', () => {
        expect(decode('l1r1')).toEqual('lara');
    });
    it('verifica se o número "2" é substituída pela letra "e"', () => {
        expect(decode('2l2')).toEqual('ele');
    });
    it('verifica se o número "3" é substituída pela letra "i"', () => {
        expect(decode('v3x3')).toEqual('vixi');
    });
    it('verifica se o número "4" é substituída pela letra "o"', () => {
        expect(decode('4v4')).toEqual('ovo');
    });
    it('verifica se o número "5" é substituída pela letra "u"', () => {
        expect(decode('5r5b5')).toEqual('urubu');
    });
    it('verifica se a string retornada tem o mesmo tamanho do string passada como parâmetro', () => {
        expect(decode('lara').length).toEqual(4);
    });

})