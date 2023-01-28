import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';
import {memo} from "react";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesPage, {}, [])}>
            ARTICLE PAGE
        </div>
    );
};

export default memo(ArticlesPage);
