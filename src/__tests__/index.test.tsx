import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from '@/pages/index';


describe("Calculator", () => {
    
    it("renders inital state of the calculator", () => {
        render(<Home/>);
        // check if all components are rendered
        expect(screen.getByTestId('leaderPaceInputID')).toBeInTheDocument();
        expect(screen.getByTestId('timeRemainingInputID')).toBeInTheDocument();
        expect(screen.getByTestId('calculateButton')).toBeInTheDocument();
        expect(screen.getByText('Finish filling fields to see lap table.')).toBeInTheDocument();
    });

    it("handles time inputs correctly", () => {
        render(<Home/>);
        // check when only one number is entered
        fireEvent.change(screen.getByTestId('leaderPaceInputID'), {target: {value: '1'}});
        expect(screen.getByTestId('leaderPaceInputID')).toHaveValue('00:01');
        // check when all numbers are entered
        fireEvent.change(screen.getByTestId('leaderPaceInputID'), {target: {value: '1234'}});
        expect(screen.getByTestId('leaderPaceInputID')).toHaveValue('12:34');
        // check when more than four numbers are entered
        fireEvent.change(screen.getByTestId('leaderPaceInputID'), {target: {value: '12345'}});
        expect(screen.getByTestId('leaderPaceInputID')).toHaveValue('23:45');

    });

    it("handles lap input correctly", () => {
        render(<Home/>);
        fireEvent.change(screen.getByTestId('lapNumberInputID'), {target: {value: '12'}});
        expect(screen.getByTestId('lapNumberInputID')).toHaveValue('12');
        
    });

    it("renders lap times correctly", () => {
        render(<Home/>);
        // inputs
        fireEvent.change(screen.getByTestId('lapNumberInputID'), {target: {value: '10'}});
        fireEvent.change(screen.getByTestId('timeRemainingInputID'), {target: {value: '6:00'}});
        fireEvent.change(screen.getByTestId('leaderPaceInputID'), {target: {value: '1:20'}});
        fireEvent.click(screen.getByTestId('calculateButton'));

        // check table output
        // check row values against expected output
        const rows = screen.getAllByRole('row');
    });

});