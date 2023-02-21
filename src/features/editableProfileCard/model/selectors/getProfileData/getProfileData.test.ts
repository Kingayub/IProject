import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/incognito.jpg';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            first: 'ads',
            lastname: 'asdsad',
            username: 'asdsadsadas',
            city: 'Grozny',
            country: Country.Russia,
            currency: Currency.RUB,
            age: 29,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});