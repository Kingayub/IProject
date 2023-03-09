import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { Text, TextSize } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from '../../model/consts/articleConsts';

interface ArticleListProps {
    className?: string;
    articles:Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

const getSkeletons = (view:ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = (props: ArticleListProps) => {
    const {
        articles,
        view = ArticleView.SMALL,
        isLoading,
        className,
        target,
        virtualized = true,
    } = props;
    const { t } = useTranslation();

    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? 1 : Math.ceil(articles.length / itemsPerRow);

    // const rowRenderer = ({
    //     index, isScrolling, key, style,
    // }: ListRowProps) => {
    //     const items = [];
    //     const fromIndex = index * itemsPerRow;
    //     const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
    //     for (let i = fromIndex; i < toIndex; i += 1) {
    //         items.push(
    //             <ArticleListItem
    //                 article={articles[index]}
    //                 view={view}
    //                 className={cls.card}
    //                 target={target}
    //                 key={`str${i}`}
    //             />,
    //         );
    //     }
    //     return (
    //         <div
    //             key={key}
    //             className={cls.row}
    //             style={style}
    //         >
    //             {items}
    //         </div>
    //     );
    // };

    if (isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={`${t('Статьи не найдены')}`} />
            </div>
        );
    }

    // return (
    // <WindowScroller
    //     scrollElement={document.getElementById(PAGE_ID) as Element}
    // >
    //     {(
    //         {
    //             height,
    //             width,
    //             registerChild,
    //             isScrolling,
    //             scrollTop,
    //             onChildScroll,
    //         },
    //     ) => (
    //         <div
    //             ref={registerChild}
    //             className={classNames(cls.ArticleList, {}, [className, cls[view]])}
    //         >
    //             {virtualized
    //                 ? (
    //                     <List
    //                         height={height ?? 700}
    //                         rowCount={rowCount}
    //                         rowHeight={isBig ? 700 : 330}
    //                         rowRenderer={rowRenderer}
    //                         width={width ? width - 80 : 700}
    //                         autoHeight
    //                         onScroll={onChildScroll}
    //                         isScrolling={isScrolling}
    //                         scrollTop={scrollTop}
    //                     />
    //                 )
    //                 : (
    //                     articles.map((item) => (
    //                         <ArticleListItem
    //                             article={item}
    //                             view={view}
    //                             target={target}
    //                             key={item.id}
    //                             className={cls.card}
    //                         />
    //                     ))
    //                 )}
    //
    //             {isLoading && getSkeletons(view)}
    //         </div>
    //     )}
    // </WindowScroller>

    return (
        <HStack gap="8" max>
            { virtualized
                ? (
                    <Virtuoso
                        data-testid="ArticleList"
                        // style={{ height: isBig ? 700 : 330, width: isBig ? 700 : 330 }}
                        useWindowScroll
                        data={articles}
                        // overscan={200}
                        itemContent={(index, article: Article) => {
                            return (
                                <ArticleListItem
                                    article={article}
                                    view={view}
                                    target={target}
                                    className={cls.card}
                                    key={index}
                                />
                            );
                        }}
                    />
                )

                : (
                    <div
                        data-testid="ArticleList"
                        className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                    >
                        {
                            (articles.map((item) => (
                                <ArticleListItem
                                    article={item}
                                    view={view}
                                    target={target}
                                    key={item.id}
                                    className={cls.card}
                                />
                            )))
                        }
                    </div>
                )}
            {isLoading && getSkeletons(view)}
        </HStack>
    );
};
