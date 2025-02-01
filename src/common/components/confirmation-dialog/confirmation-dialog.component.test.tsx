import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmationDialog from './confirmation-dialog.component';

describe('ConfirmationDialog', () => {
  it('should render the dialog with the correct message', () => {
    render(<ConfirmationDialog message="Are you sure?" onConfirm={() => {}} onCancel={() => {}} />);

    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
  });

  it('should call onConfirm when confirm button is clicked', () => {
    const onConfirmMock = vi.fn();
    render(<ConfirmationDialog message="Are you sure?" onConfirm={onConfirmMock} onCancel={() => {}} />);

    fireEvent.click(screen.getByText('Confirm'));
    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });

  it('should call onCancel when cancel button is clicked', () => {
    const onCancelMock = vi.fn();
    render(<ConfirmationDialog message="Are you sure?" onConfirm={() => {}} onCancel={onCancelMock} />);

    fireEvent.click(screen.getByText('Cancel'));
    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });
});
