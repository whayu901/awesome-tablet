import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ButtonComponent from '../../components/Button';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Text>AHM wahyu</Text>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <ButtonComponent title={'Download'} miniButton />

        <ButtonComponent
          title={'QR Scan'}
          miniButton
          onPress={() => navigation.navigate('QRCode')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
