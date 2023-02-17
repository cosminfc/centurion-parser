import { TypeSymbol } from './Types'

export function serializeSymbol(symbol: TypeSymbol): string {
    if (typeof symbol === 'string') {
        return symbol
    }

    if (typeof symbol === 'object') {
        return JSON.stringify(symbol.literal)
    }

    throw new Error('Unknown symbol type: ' + symbol)
}
