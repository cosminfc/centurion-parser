import { serializeSymbol } from '../src/helpers'

describe('test symbols serializer', () => {
    it('should correctly serialize a non terminal symbol', () => {
        const nonTerminalSymbol = 'non-terminal-symbol'
        expect(serializeSymbol(nonTerminalSymbol)).toBe<string>(nonTerminalSymbol)
    })

    it('should correctly serialize a terminal symbol', () => {
        const terminalSymbol = { literal: 'terminal-symbol' }
        expect(serializeSymbol(terminalSymbol)).toBe<string>(JSON.stringify(terminalSymbol.literal))
    })

    it('should throw error on unrecognized symbol', () => {
        expect(() => {
            serializeSymbol(1 as unknown as string)
        }).toThrow(Error)
    })
})
