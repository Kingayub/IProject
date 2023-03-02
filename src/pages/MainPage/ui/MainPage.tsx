import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
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
