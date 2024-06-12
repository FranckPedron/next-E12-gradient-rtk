'use client'

import Gradient from "@/app/gradient/page";
import Colors from "@/components/Colors";
import DirectionButtons from "@/components/Buttons/DirectionButtons";
import RandomButtons from "@/components/Buttons/RandomButtons";
import {useAppSelector} from "@/lib/hooks";

export default function Home() {
    const type = useAppSelector((state) => state.type);

  return (
  <div className="app">
      <RandomButtons />
        <Colors />
        <Gradient />
      {type === "linear" && <DirectionButtons/>}
</div>
  );
}
