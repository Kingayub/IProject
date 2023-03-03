import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { themeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#0449e0' },
            { name: 'dark', class: Theme.DARK, color: '#090949' },
            { name: 'violet', class: Theme.VIOLET, color: '#e7d27f' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(themeDecorator(Theme.LIGHT));
addDecorator(SuspenseDecorator);
