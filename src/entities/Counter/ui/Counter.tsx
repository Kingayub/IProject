import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { increment, add, decrement } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleIncDec = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(10);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={handleAddFive}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                onClick={handleInc}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handleIncDec}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
