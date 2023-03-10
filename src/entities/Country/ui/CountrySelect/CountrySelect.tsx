import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?:Country;
    onChange?: (value:Country)=> void;
    readonly?:boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Belarus, content: Country.Belarus },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}:CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (

        <ListBox
            onChange={onChangeHandler}
            value={value}
            defaultValue={`${t('Укажите страну')}`}
            items={options}
            readonly={readonly}
            className={classNames('', {}, [className])}
            direction="top right"
            label={`${t('Укажите страну')}`}
        />
    );
});
