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
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [leaderPace, setLeaderPace] = useState<string>('');
  const [laps, setLaps] = useState<number[]>([]);

  function handleChange(id: string, value: string): void {
    if (id === 'timeRemainingInputID') {
      setTimeRemaining(value);
    }
    else if (id === 'leaderPaceInputID') {
      setLeaderPace(value);
    }
  }

  function isFilled(): boolean{
    if (timeRemaining === '' || leaderPace === '' || startLap === ''){
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
      console.log(timeStrToNumber(timeRemaining), timeStrToNumber(leaderPace))
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
      className={`bg-gray-900 flex min-h-screen flex-col items-center p-5 ${inter.className}
        sm:grid sm:grid-cols-2 sm:items-start sm:gap-10`}
    >
      <div className='sm: sticky ms:top-0 sm:max-w-60 sm:justify-self-end'>
        <div className='pb-5 pt-5'>
          <h1 className="text-2xl">Last Lap Calculator</h1>
          <p className='text-xs text-cyan-400'>by: Robert M.</p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p>Current lap</p>
            <NumberInput onChangeCallback={setStartLap} value={startLap} data-testid='lapNumberInputID'/>
          </div>
          <div>
            <p>Time remaining at lap start</p>
            <TimeInput onChangeCallback={handleChange} id='timeRemainingInputID'  value={timeRemaining} data-testid='timeRemainingInputID'/>
          </div>
          <div>
            <p>Leader&apos;s pace</p>
            <TimeInput onChangeCallback={handleChange} id='leaderPaceInputID' value={leaderPace}  data-testid='leaderPaceInputID'/>
          </div>
          <button className='bg-green-800 hover:bg-green-900 rounded h-8' onClick={handleClick} data-testid='calculateButton'>Calculate</button>
        </div>
      
      </div>
      <div className='max-w-60 m-5 p-5 rounded-lg border'>
      {isFilled() ? 
        <LapTable startLap={startLap} laps={laps}/> : 
        <h1 className="text-3xl text-gray-700 p-4 text-center">
          Finish filling fields to see lap table.
        </h1>
      }
      </div>
    </main>
  );
}
