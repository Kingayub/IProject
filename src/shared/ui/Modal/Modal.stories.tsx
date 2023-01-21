import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'lorem ipsum asldjasjbwqq aksd sadhas kdj askd askjd askjdkasj dkjas fkd gfamnd KJKJW DMN ASB DANS FMNS N DFSDH fakj daskjd asjk',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'lorem ipsum asldjasjbwqq aksd sadhas kdj askd askjd askjdkasj dkjas fkd gfamnd KJKJW DMN ASB DANS FMNS N DFSDH fakj daskjd asjk',
};
Dark.decorators = [themeDecorator(Theme.DARK)];
