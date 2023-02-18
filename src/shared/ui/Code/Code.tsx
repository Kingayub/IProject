import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import CopyIcon from '../../assets/icons/Vector (1).svg';

interface CodeProps {
    className?: string;
    text:string;
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>

    );
};
