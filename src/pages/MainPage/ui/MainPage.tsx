import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { HStack } from '@/shared/ui/Stack';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RaitingCard } from '@/entities/Raiting';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <RaitingCard />
        </Page>
    );
});

export default MainPage;
