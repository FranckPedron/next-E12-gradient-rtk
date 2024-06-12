'use client'
import './other.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { changeDirection } from '@/lib/features/colors/colorsSlice';

function OtherDirectionChoice() {
    const direction = useAppSelector((state) => state.direction).replace('deg', '');

    const dispatch = useAppDispatch();

    const handleChange = (e) => {
        dispatch(changeDirection(`${e.target.value}deg`));
    };

    return (
        <div className="other">
            <label className="other-label">
                Autre
                <input placeholder="123" type="number" className="other-input" value={direction} onChange={handleChange} />
                <span className="other-unit">deg</span>
            </label>
        </div>
    );
}

export default OtherDirectionChoice;
