import { Dialog, DialogHeader, DialogFooter, Button } from '@material-tailwind/react';
import React, { useState } from 'react';

function DeleteModel({ delModel, setDelModel, confirmDelete }) {
  const [open, setOpen] = useState(true);

  const handleCancel = () => {
    setOpen(false);
    setDelModel(false);
  };

  const handleConfirm = () => {
    confirmDelete();
    setOpen(false);
  };

  return (
    <Dialog open={open} handler={() => setOpen(false)}>
      <DialogHeader>Are you sure you want to delete?</DialogHeader>
      <DialogFooter>
        <Button
          variant="text"
          color="green"
          onClick={handleCancel}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="red" onClick={handleConfirm}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default DeleteModel;
