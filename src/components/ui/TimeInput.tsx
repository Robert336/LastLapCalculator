import React, {useState} from "react";
import {Input, InputProps} from '@/components/ui/Input';
import { formatTime } from "@/utils/timeUtils";

interface TimeInputProps extends InputProps{
  value: string,
  id: string,
  onChangeCallback: (id:string, value: string) => void;
  
}

export const TimeInput: React.FC<TimeInputProps> = ({onChangeCallback, id, value, ...props}) => {
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    let value = event.target.value;
    // new input will be: xx:xxy, where y is the new digit and x are older.
    // formatTime will return a newly formatted time string:
    // xx:xy, where y is the new value.
    value = formatTime(value);
    onChangeCallback(id, value);
  }

  return (
    <Input
    type="text"
    onChange={handleChange}
    value={value}
    id={id}
    {...props}
    />
  );
}

export default TimeInput;