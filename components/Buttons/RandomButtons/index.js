'use client'

import { useAppDispatch } from '@/lib/hooks';
import Button from '../Button';
import ButtonsGroup from '../ButtonsGroup';
import {randomHexColor} from "@/utils/utils";
import {changeFirstColor, changeLastColor} from "@/lib/features/colors/colorsSlice";

const RandomButtons = () => {
    const dispatch = useAppDispatch();

    const changeFirst = () => {
        dispatch(changeFirstColor(randomHexColor()));
    }

    const changeLast = () => {
        dispatch(changeLastColor(randomHexColor()));
    }

    const changeBoth = () => {
        changeFirst();
        changeLast();
    }

    return (
        <ButtonsGroup>
            <Button action={changeFirst}>Random First</Button>
            <Button action={changeBoth}>Random All</Button>
            <Button action={changeLast}>Random Last</Button>
        </ButtonsGroup>
    )
}
export default RandomButtons
