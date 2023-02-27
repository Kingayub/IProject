import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '12' | '16' | '22' | '26' | '32';

const justifyClasses:Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses:Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses:Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const flexGapClasses:Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    12: cls.gap12,
    16: cls.gap16,
    22: cls.gap22,
    26: cls.gap26,
    32: cls.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?:boolean;
}

export const Flex = ({
    className,
    children,
    align = 'center',
    direction = 'row',
    justify = 'start',
    gap,
    max,
}: FlexProps) => {
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && flexGapClasses[gap],
    ];
    const mods:Mods = {
        [cls.max]: max,
    };
    return (
        <div className={classNames(cls.Flex, mods, classes)}>
            {children}
        </div>
    );
};
