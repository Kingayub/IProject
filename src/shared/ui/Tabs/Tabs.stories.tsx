import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            value: 'Ayub',
            content: 'Ayub1',
        },
        {
            value: 'Tab',
            content: 'Tab1',
        },
        {
            value: 'Tab2',
            content: 'Tab3',
        },
    ],
    value: 'Tab2',
    onTabClick: action('onTabClick'),
};
