import {useState} from 'react';

export const useSendData = () => {
  const [priorityValue, setPriorityValue] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return {
    priorityValue,
    setPriorityValue,
    date,
    setDate,
    open,
    setOpen,
  };
};
