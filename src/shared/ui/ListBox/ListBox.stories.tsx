import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [(Story) => <div style={{ padding: '100px' }}><Story /></div>],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: 'click',
    items: [
        {
            content: '123',
            value: '1',
        },
        {
            content: '222',
            value: '2',
        },
        {
            content: 'F.,sad',
            value: '3',
        },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    value: 'click',
    direction: 'top left',
    items: [
        {
            content: '123',
            value: '1',
        },
        {
            content: '222',
            value: '2',
        },
        {
            content: 'F.,sad',
            value: '3',
        },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    value: 'click',
    direction: 'top right',
    items: [
        {
            content: '123',
            value: '1',
        },
        {
            content: '222',
            value: '2',
        },
        {
            content: 'F.,sad',
            value: '3',
        },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    value: 'click',
    direction: 'bottom left',
    items: [
        {
            content: '123',
            value: '1',
        },
        {
            content: '222',
            value: '2',
        },
        {
            content: 'F.,sad',
            value: '3',
        },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    value: 'click',
    direction: 'bottom right',
    items: [
        {
            content: '123',
            value: '1',
        },
        {
            content: '222',
            value: '2',
        },
        {
            content: 'F.,sad',
            value: '3',
        },
    ],
};
