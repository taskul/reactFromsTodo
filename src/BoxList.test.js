import {render, fireEvent, getByTestId, getByText, within } from '@testing-library/react';
import BoxList from './BoxList';

// smoke test
it('Should render without crashing', function () {
    render(<BoxList />)
})

// snapshot test
it('Should match Snapshot', function () {
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})

// initially should not have width 50px by height 40px red box present in DOM
// then submits form for creating 50px by 40px red box
// then 50px by 40px red box should be present in DOM
// finally clicking on "X" button should remove red box
it('should check form submition', function() {
    const {getByText, queryByTestId, getByLabelText} = render(<BoxList />);

    // checking to make sure box with a testid of red is not present
    expect(queryByTestId('red')).not.toBeInTheDocument();

    // get input fields from the form and a form submittion button
    const width = getByLabelText('Width:');
    const height = getByLabelText('Height:');
    const color = getByLabelText('Color:');
    const btn = getByText('Add')

    // change the values of the input fields
    fireEvent.change(width, {target: {value:'50'}});
    fireEvent.change(height, {target: {value:'40'}});
    fireEvent.change(color, {target:{value:'red'}})
    fireEvent.click(btn);

    // box with testid red should not be present in DOM
    expect(queryByTestId('red')).toBeInTheDocument();

    // remove the box with testid red
    const redBox = queryByTestId('red')
    const removeBtn = within(redBox).getByText('X')

    fireEvent.click(removeBtn)

    // check to make sure box with testid of red is no longer present
    expect(queryByTestId('red')).not.toBeInTheDocument();
})
