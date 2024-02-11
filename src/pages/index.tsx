import React, {useState, useRef} from 'react';
import {Input} from "@/components/ui/Input";
import TimeInput from '@/components/ui/TimeInput';
import { Inter } from "next/font/google";
import { 
  timeStrToNumber,
} from '@/utils/timeUtils';
import { NumberInput } from '@/components/ui/NumberInput';
import {LapTable} from '@/components/ui/LapTable';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [startLap, setStartLap] = useState('');
  const [timeRemaining, setTimeRemaining] = useState<string>('00:00');
  const [leaderPace, setLeaderPace] = useState<string>('00:00');
  const [laps, setLaps] = useState<number[]>([]);

  function handleChange(id: string, value: string): void {

    if (id === 'timeRemainingInputID') {
      // format time
      // update state
      setTimeRemaining(value);
    }
    else if (id === 'leaderPaceInputID') {
      setLeaderPace(value);
    }
  }

  function isFilled(): boolean{
    if (timeRemaining === '00:00' || leaderPace === '00:00' || startLap === ''){
      return false;
    } else {
      return true;
    }
  }

  function handleClick(): void {

    if (isFilled() === false){
      alert('Missing inputs');
      return;
    }

    if (timeStrToNumber(timeRemaining) / timeStrToNumber(leaderPace) > 40) {
      alert('ERROR: Calculation is too large, there is either more than 40 laps left or one of your time inputs is wrong.');
      return;
    }

    let tempLaps: Array<number> = [timeStrToNumber(timeRemaining)];
    while (tempLaps[tempLaps.length - 1] > 0) {
      const nextLap = tempLaps[tempLaps.length - 1] - timeStrToNumber(leaderPace);
      tempLaps.push(nextLap);
    }
    setLaps(tempLaps);
  }

  return (
    <main
      className={`bg-gray-900 flex min-h-screen flex-col items-center p-5 ${inter.className}`}
    >
      <h1 className="text-xl">Last Lap Calculator</h1>
      <div className="flex flex-col gap-5">
        <p>Current lap</p>
        <NumberInput onChangeCallback={setStartLap} value={startLap} />
        <p>Time to-go</p>
        <TimeInput onChange={handleChange} id='timeRemainingInputID'  value={timeRemaining}/>
        <p>Leader&apos;s pace</p>
        <TimeInput onChange={handleChange} id='leaderPaceInputID' value={leaderPace}/>
        <button className='bg-green-800 hover:bg-green-900 rounded h-8' onClick={handleClick}>Calculate</button>
      </div>
      <div>
      {isFilled() ? 
        <LapTable startLap={startLap} laps={laps}/> : 
        <h1 className="text-3xl text-gray-700 p-10">
          Finish filling above to see lap table.
        </h1>
      }
      </div>
    </main>
  );
}
