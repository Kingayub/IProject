import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateError } from './getProfileValidateError';
import { ValidateProfileError } from '../../consts/consts';

describe('getProfileValidateError.test', () => {
    test('should work with filed state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
    });
});
