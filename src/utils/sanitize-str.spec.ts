import { sanitizeStr } from "./sanitize-str"

describe('sanitizeStr (unit)' , () => {
  test('return a empty string if is a false value', () => {
    // @ts-expect-error testando a função sem parâmetros
    expect(sanitizeStr()).toBe('');
  })

  test('return a empty string if value isnt a string', () => {
    // @ts-expect-error testando a função sem parâmetros
    expect(sanitizeStr(123)).toBe('');
  })

  test('make trim of string', () => {
    expect(sanitizeStr('  a  ')).toBe('a');
  })

  test('make the string normalize with NFC', () => {
    const original = 'e\u0301';
    const expected = 'é';
    expect(expected).toBe(sanitizeStr(original));
  })
})