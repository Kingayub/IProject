import { ArticleType } from '../../model/consts/articleConsts';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import {
    articleDetailsReducer,
} from './articleDetailsSlice';

const data:Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'Ayub',
    },
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
