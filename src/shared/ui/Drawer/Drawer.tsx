import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';
import {useModal} from "shared/lib/hooks/useModal/useModal";

interface DrawerProps {
    className?: string;
    children?:ReactNode;
    isOpen?:boolean;
    onClose?:()=> void;
    lazy?:boolean;
}

export const Drawer = memo(({
    className, onClose, isOpen, children, lazy,
}: DrawerProps) => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const { isClosing, close, isMounted } = useModal({
        onClose,
        isOpen,
        animationDelay: 300,
    });

    if (lazy && !isMounted) {
        return null;
    }

    const mods:Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
