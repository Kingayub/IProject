import { Article, ArticleDetailsSchema } from 'entities/Article';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { ArticleType } from 'entities/Article/model/types/article';
import {
    articleDetailsActions, articleDetailsReducer,
} from './articleDetailsSlice';

const data:Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [],
};

describe('profileSlice.test', () => {
    test('test update profile pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
        });
    });

    // test('test fulfilled', () => {
    //     const state: DeepPartial<ArticleDetailsSchema> = {
    //         data,
    //         isLoading: true,
    //         error: 'error',
    //     };
    //     expect(articleDetailsReducer(
    //         state as ArticleDetailsSchema,
    //         fetchArticleById.fulfilled(),
    //     )).toEqual({
    //         isLoading: false,
    //         data,
    //         error: undefined,
    //     });
    // });
});
