import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { RaitingCard } from '@/entities/Raiting';
import { useGetArticleRating, useRateRating } from '@/features/articleRating/api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId:string;
}

const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateRating();

    const rating = data?.[0];

    const handleRateArticle = useCallback((starsCount:number, feedback?:string) => {
        try {
            rateArticleMutation({
                articleId,
                userId: userData?.id ?? '',
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount:number, feedback?:string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount:number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RaitingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={`${t('Оцените статью')}`}
            feedbackTitle={`${t('Оставь свой отзыв о статье, это поможет улучшить качество')}`}
            hasFeedback
        />
    );
};

export default memo(ArticleRating);
