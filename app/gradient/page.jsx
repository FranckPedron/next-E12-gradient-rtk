'use client'

import {useAppSelector} from "@/lib/hooks";

const Gradient = () => {
    const direction = useAppSelector((state) => state.direction);
    const firstColor = useAppSelector((state) => state.firstColor);
    const lastColor = useAppSelector((state) => state.lastColor);
    const type = useAppSelector((state) => state.type);

    let result;
    if (type === 'linear') {
        result = `linear-gradient(${direction}, ${firstColor}, ${lastColor})`;
    }
    else {
        result = `radial-gradient(circle at center, ${firstColor}, ${lastColor})`;
    }

    return (
        <div
            id="gradient"
            style={{
                background: result,
            }}
        />
    );
}
export default Gradient
