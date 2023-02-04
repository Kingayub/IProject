import { getQuerryParams } from './addQuerryParams';

describe('addQuerryParams.test', () => {
    test('test with one params', () => {
        const params = getQuerryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiply params', () => {
        const params = getQuerryParams({
            test: 'value',
            second: '2',
        });
        expect(params).toBe('?test=value&second=2');
    });
    test('test with undefined', () => {
        const params = getQuerryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
