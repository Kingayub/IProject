import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    title: 'Title maitl faitl',
    text: 'Ca ha cunam ax xy box, Ca ha cunam ax xy box, Ca ha cunam ax xy box',
};

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title maitl faitl',
    text: 'Ca ha cunam ax xy box, Ca ha cunam ax xy box, Ca ha cunam ax xy box',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title maitl faitl',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Ca ha cunam ax xy box, Ca ha cunam ax xy box, Ca ha cunam ax xy box',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title maitl faitl',
    text: 'Ca ha cunam ax xy box, Ca ha cunam ax xy box, Ca ha cunam ax xy box',
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title maitl faitl',
};
OnlyTitleDark.decorators = [themeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Ca ha cunam ax xy box, Ca ha cunam ax xy box, Ca ha cunam ax xy box',
};
OnlyTextDark.decorators = [themeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title maitl faitl',
    text: 'Ca ha cunam ax xy box, Ca ha cunam ax xy box, Ca ha cunam ax xy box',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title maitl faitl',
    text: 'Ca ha cunam ax xy box, Ca ha cunam ax xy box, Ca ha cunam ax xy box',
    size: TextSize.M,
};
