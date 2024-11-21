import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

export const useQRCode = () => {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();
  const navigation = useNavigation();

  const [isActive, setIsActive] = useState(true);

  React.useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }

    return () => {
      setIsActive(false);
    };
  }, [hasPermission, requestPermission]);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      if (codes) {
        navigation.navigate('Equipment');
        setIsActive(false);
      }
    },
  });

  return {
    device,
    codeScanner,
    isActive,
    setIsActive,
  };
};
