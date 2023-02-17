import { TypeSymbol } from './Types'
import { serializeSymbol } from './helpers'

export class Rule {
    private static next: number = 0

    private readonly id: number
    private readonly name: string
    private readonly symbols: TypeSymbol[]

    public constructor(name: string, symbols: TypeSymbol[]) {
        this.symbols = symbols || [] // a list of literal | regex class | non-terminal
        this.id = ++Rule.next
        this.name = name
    }

    public getId(): number {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getSymbols(): TypeSymbol[] {
        return this.symbols
    }

    public toString(withCursorAt?: number): string {
        if (!withCursorAt) {
            return this.name + ' → ' + this.symbols.map(serializeSymbol).join(' ')
        }

        let sequence = this.symbols.slice(0, withCursorAt).map(serializeSymbol).join(' ')
        sequence = sequence + ' ● '
        sequence = sequence + this.symbols.slice(withCursorAt).map(serializeSymbol).join(' ')
        return this.name + ' → ' + sequence
    }
}
