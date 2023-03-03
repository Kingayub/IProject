import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'ads',
            lastname: 'asdsad',
            username: 'asdsadsadas',
            city: 'Grozny',
            country: Country.Russia,
            currency: Currency.RUB,
            age: 29,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [themeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'ads',
            lastname: 'asdsad',
            username: 'asdsadsadas',
            city: 'Grozny',
            country: Country.Russia,
            currency: Currency.RUB,
            age: 29,
        },
    },
})];
