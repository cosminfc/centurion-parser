import { Rule } from '../src'
import { TypeSymbol } from '../src/Types'

describe('test Rule class', () => {
    it('should have proper getters', () => {
        const rule = new Rule('rule-name', ['non-terminal-symbol', { literal: ';' }])
        expect<number>(rule.getId()).toBe<number>(1)
        expect<string>(rule.getName()).toBe<string>('rule-name')
        expect<TypeSymbol[]>(rule.getSymbols()).not.toBeUndefined()
        expect<number>(rule.getSymbols().length).toBe<number>(2)
    })

    it('should return empty list of symbols', () => {
        const rule = new Rule('rule-name', undefined as unknown as [])
        expect<TypeSymbol[]>(rule.getSymbols()).not.toBeUndefined()
    })

    it('should stringify properly without parameter', () => {
        const rule = new Rule('rule-name', ['non-terminal-symbol', { literal: ';' }])
        expect<string>(rule.toString()).toBe<string>('rule-name → non-terminal-symbol ";"')
    })

    it('should stringify properly with parameter', () => {
        const rule = new Rule('rule-name', ['non-terminal-symbol', { literal: ';' }])
        expect<string>(rule.toString(1)).toBe<string>('rule-name → non-terminal-symbol ● ";"')
    })
})
