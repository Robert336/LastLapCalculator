import React, {useState} from 'react';
import { Input } from '@/components/ui/Input';

interface NumberInputProps {
    value: string
    onChange: (value: string) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({value, onChange}, ...props) => {


    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        const value = event.target.value;

        // only handle change if input is a number
        if (value.match(/[0-9]/) || value == ''){
            onChange(event.target.value);
        }
    }

    return (
        <Input
        type="text"
        onChange={handleChange}
        value={value}
        />
    );
}