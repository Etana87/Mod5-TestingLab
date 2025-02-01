import React from 'react';

type ConfirmationDialogProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ message, onConfirm, onCancel }) => (
  <div>
    <p>{message}</p>
    <button onClick={onConfirm}>Confirm</button>
    <button onClick={onCancel}>Cancel</button>
  </div>
);

export default ConfirmationDialog;