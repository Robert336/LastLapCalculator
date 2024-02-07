import React, {useState} from "react"
import {Input, InputProps} from './Input';
import { formatTime, addTimeDigit, removeTimeDigit } from "@/utils/timeUtils";

interface TimeInputProps {
    value: string,
    id: string,
    onChange: (id:string, value: string) => void;
}

export const TimeInput: React.FC<TimeInputProps> = ({onChange, id, value}, ...props) => {

    function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        const key = event.key;
        const inputLength = value.length;
    
        if (key === 'Backspace') {
          const newTime = removeTimeDigit(value);
          onChange(id, newTime);
        } else if (/^\d$/.test(key)) {
          const newTime = addTimeDigit(value, key);
          console.log(key);
          console.log(newTime);
          onChange(id, newTime);
        }
        
      }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //onChange(event.target.id, event.target.value);
    }

    return (
        <Input
        onChange={handleChange}
        type="text"
        onKeyDown={onKeyDown}
        value={value}
        id={id}
        {...props}
        />
    );
}

export default TimeInput;