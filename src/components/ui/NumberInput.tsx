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
        onChange(value.replace(/\D/, ''));
    }

    return (
        <Input
        type="text"
        onChange={handleChange}
        value={value}
        {...props}
        />
    );
}