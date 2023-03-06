import { useTranslation } from 'react-i18next';
import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/userDefault.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?:string;
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className,
    src,
    size = 100,
    alt,
    fallbackInverted,
}:AvatarProps) => {
    const { t } = useTranslation();
    const mods:Mods = {};
    const styles = useMemo<CSSProperties>(() => ({
        height: size,
        width: size,
    }), [size]);
    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;
    const fallback = <Skeleton width={size} height={size} border="50%" />;

    return (
        <AppImage
            errorFallback={errorFallback}
            fallback={fallback}
            style={styles}
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
