import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>four</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>four</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>four</div>
        </>
    ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>four</div>
        </>
    ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>four</div>
        </>
    ),
};

export const RowGap22 = Template.bind({});
RowGap22.args = {
    gap: '22',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>four</div>
        </>
    ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>four</div>
        </>
    ),
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    direction: 'column',
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>four</div>
        </>
    ),
};

export const ColumnGap22 = Template.bind({});
ColumnGap22.args = {
    direction: 'column',
    gap: '22',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>four</div>
        </>
    ),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'column',
    align: 'end',
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>four</div>
        </>
    ),
};

export const ColumnAlignStart = Template.bind({});
ColumnAlignStart.args = {
    direction: 'column',
    align: 'start',
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>four</div>
        </>
    ),
};

export const ColumnAlignCenter = Template.bind({});
ColumnAlignCenter.args = {
    direction: 'column',
    align: 'center',
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>four</div>
        </>
    ),
};
