'use client'

import Gradient from "@/components/Gradient/page";
import Colors from "@/components/Colors";
import DirectionButtons from "@/components/Buttons/DirectionButtons";
import RandomButtons from "@/components/Buttons/RandomButtons";
import {useAppSelector} from "@/lib/hooks";
import SwitchType from "@/components/SwitchType";

export default function Home() {
    const type = useAppSelector((state) => state.type);

  return (
  <div className="app">
      <RandomButtons />
      <Colors />
      <Gradient />
      <SwitchType />
      {type === "linear" && <DirectionButtons/>}
</div>
  );
}
