import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ButtonComponent from '../../components/Button';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Text>AHM Mobile</Text>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <ButtonComponent title={'Download'} miniButton />

        <ButtonComponent title={'QR Scan'} miniButton />
      </View>
    </View>
  );
};

export default HomeScreen;
