// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
import cipher from '../src/cipher';

describe('cipher', () => {

  test('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    test('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    test('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      //completa este test!
      expect(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    
  });

  describe('cipher.encode', () => {

    test('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    test('should return "123?!$" for "123?!$" with offset 33', () => {
      //completa este test!
      expect(cipher.encode(33,"123?!$")).toBe("123?!$");
    });

    });
  

  describe('cipher.decode', () => {

    test('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    test('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      //completa este test!
      expect(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG")).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

  });

});

describe('cipher.decode', () => {

  test('should be a function', () => {
    expect(typeof cipher.decode).toBe('function');
  });
  test('should return "123?!$" for "123?!$" with offset 33', () => {
    //completa este test!
    expect(cipher.decode(33,"123?!$")).toBe("123?!$");
  });

  });