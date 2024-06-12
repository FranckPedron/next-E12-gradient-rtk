'use client'
import { useAppSelector } from '@/lib/hooks';
import Color from '../Color';

function Colors() {
    const firstColor = useAppSelector((state) => state.firstColor);
    const lastColor = useAppSelector((state) => state.lastColor);

    return (
        <div id="colors">
            <Color color={firstColor} /> - <Color color={lastColor} />
        </div>
    );
}

export default Colors;
