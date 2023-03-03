import { Story } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line king-ayub-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const themeDecorator = (theme:Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
