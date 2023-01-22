import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '123123',
};

export const Secondary = Template.bind({});
Secondary.args = {
    placeholder: 'Type text',
    value: '123123',
    theme: Theme.DARK,
};
Secondary.decorators = [themeDecorator(Theme.DARK)];
