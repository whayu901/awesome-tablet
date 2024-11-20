import React, {useState} from 'react';
import {Vibration} from 'react-native';
import {
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

export const useQRCode = () => {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

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
      Vibration.vibrate();

      console.log(codes[0]?.value);
    },
  });

  return {
    device,
    codeScanner,
    isActive,
    setIsActive,
  };
};
