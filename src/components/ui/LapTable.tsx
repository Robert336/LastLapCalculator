import React, {useMemo} from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import {
  timeStrToNumber,
  millisecondsToTimeStr
} from '@/utils/timeUtils';
import { time } from 'console';

interface LapTableProps {
  startLap: string,
  laps: Array<number>
}

export function LapTable({startLap, laps}: LapTableProps) {
  //const [laps, setLaps] = useState([]);

  return (
  <Table>
    <TableCaption>Projected Laps</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Start of Lap #</TableHead>
        <TableHead className='text-right'>Time Remaining</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        laps.map((lap, idx) => {
          return (
            <TableRow key={idx}>
              <TableCell>{Number(startLap) + idx}</TableCell>
              <TableCell>{millisecondsToTimeStr(lap)}</TableCell>
            </TableRow>
          );
        })
      }
    </TableBody>
  </Table>
  );
  }