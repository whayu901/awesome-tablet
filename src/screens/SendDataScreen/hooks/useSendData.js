import {CommonActions, useNavigation} from '@react-navigation/native';
import {useState} from 'react';

export const useSendData = () => {
  const navigation = useNavigation();

  const [priorityValue, setPriorityValue] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onGobackToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Home'}],
      }),
    );
  };

  return {
    priorityValue,
    setPriorityValue,
    date,
    setDate,
    open,
    setOpen,
    onGobackToHome,
  };
};
