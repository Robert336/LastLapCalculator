import React, {useState, useRef} from 'react';
import {Input} from "@/components/ui/Input";
import TimeInput from '@/components/ui/TimeInput';
import { Inter } from "next/font/google";
import { formatTime } from '@/utils/timeUtils';
import { NumberInput } from '@/components/ui/NumberInput';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [startLap, setStartLap] = useState('');
  const [timeRemaining, setTimeRemaining] = useState<string>('00:00.000');
  const [leaderPace, setLeaderPace] = useState<string>('00:00.000');


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


  return (
    <main
      className={`bg-gray-900 flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <h1 className="text-xl">Last Lap Calculator</h1>
      
      <div className="flex flex-col gap-5">
        <p>Current lap</p>
        <NumberInput onChangeCallback={setStartLap} value={startLap} />
        <p>Time to-go</p>
        <TimeInput onChange={handleChange} id='timeRemainingInputID'  value={timeRemaining}/>
        <p>Leader&apos;s pace</p>
        <TimeInput onChange={handleChange} id='leaderPaceInputID' value={leaderPace}/>
      </div>
      <h1 className="text-3xl text-gray-700">
        Finish filling above to see lap table.
      </h1>
    </main>
  );
}
