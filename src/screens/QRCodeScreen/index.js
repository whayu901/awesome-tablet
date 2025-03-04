import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useQRCode} from './hooks/useQRCode';
import {Camera} from 'react-native-vision-camera';
import {CommonActions, useNavigation} from '@react-navigation/native';

import ButtonComponent from '../../components/Button';

const QRCodeScreen = () => {
  const {codeScanner, device, isActive, setIsActive} = useQRCode();
  const navigation = useNavigation();

  const onGobackToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Home'}],
      }),
    );
  };

  return (
    <View style={{flex: 1}}>
      <Camera
        isActive={isActive}
        device={device}
        codeScanner={codeScanner}
        style={{flex: 1}}
      />

      <View style={styles.markerContainer}>
        <View style={styles.marker} />
      </View>

      <View style={styles.buttonContainer}>
        <ButtonComponent
          title={'Cancel'}
          onPress={() => {
            setIsActive(false);
            onGobackToHome();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    zIndex: 99,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    width: '90%',
  },
  markerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    width: '60%',
    height: '60%',
    borderWidth: 4,
    borderColor: 'green',
    borderRadius: 15,
  },
});

export default QRCodeScreen;
