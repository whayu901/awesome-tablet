import React from 'react';
import {Vibration} from 'react-native';
import {
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

export const useQRCode = () => {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  React.useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
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
  };
};
