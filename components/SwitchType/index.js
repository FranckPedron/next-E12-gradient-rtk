import React from 'react'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {toggleRadialMode} from "@/lib/features/colors/colorsSlice";

const SwitchType = () => {
    const dispatch = useAppDispatch();
    const handleChange = () => {
        dispatch(toggleRadialMode());
    }
    const currentType = useAppSelector((state) => state.type);

    return (
        <div>
            <label>
                <input checked={currentType === 'radial'} onChange={handleChange} type="checkbox" />
                Activer le dégradé radial
            </label>
        </div>
    );
}
export default SwitchType
