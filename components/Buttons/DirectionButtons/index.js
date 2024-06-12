'use client'

import { useAppDispatch } from '@/lib/hooks';
import Button from '../Button';
import ButtonsGroup from '../ButtonsGroup';

import OtherDirectionChoice from './OtherDirectionChoice';
import {changeDirection} from "@/lib/features/colors/colorsSlice";

function DirectionButtons() {
    const dispatch = useAppDispatch();
    //currying: fonction qui retourne une fonction qui a mémorisé son contexte (paramètre de la première fonction)
    const changeToDirection = function (newDirection) {
        return function () {
            dispatch(changeDirection(newDirection));
        };
    };

    return (
        <ButtonsGroup>
            <Button action={changeToDirection('270deg')}>To Left</Button>
            <Button action={changeToDirection('90deg')}>To Right</Button>
            <Button action={changeToDirection('45deg')}>To 45°</Button>
            <Button action={changeToDirection('135deg')}>To 135°</Button>
            <Button action={changeToDirection('225deg')}>To 225°</Button>
            <Button action={changeToDirection('315deg')}>To 315°</Button>
            <OtherDirectionChoice />
        </ButtonsGroup>
    );
}

export default DirectionButtons;
