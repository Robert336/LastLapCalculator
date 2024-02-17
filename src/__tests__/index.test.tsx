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
        expect(screen.getByText('Finish filling above to see lap table.')).toBeInTheDocument();
    });
});