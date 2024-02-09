import React from 'react';
import { Input, InputProps } from '@/components/ui/Input';

interface NumberInputProps extends InputProps {
    value: string
    onChangeCallback: (value: string) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({value, onChangeCallback}, ...props) => {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        const value = event.target.value;
        // only handle change if input is a number
        onChangeCallback(value.replace(/\D/, ''));
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