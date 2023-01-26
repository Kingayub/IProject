import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './incognito.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg,
};

export const Secondary = Template.bind({});
Secondary.args = {
    size: 50,
    src: AvatarImg,
};
