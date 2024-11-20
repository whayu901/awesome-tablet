import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

import EquipmentSelector from '../../components/EquipmentSelector';
import ButtonComponent from '../../components/Button';
import DefectFindingsTable from '../../components/TableView';

const EquipmentScreen = () => {
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
    <View>
      <View style={{marginHorizontal: 12}}>
        <EquipmentSelector />
      </View>

      <View style={styles.containerPI}>
        <ButtonComponent title={'PI Analysis'} miniButton />
      </View>

      <DefectFindingsTable />

      <View style={styles.buttonContainer}>
        <ButtonComponent
          title={'Create Defect Findings'}
          miniButton
          onPress={() => navigation.navigate('SendData')}
        />
        <ButtonComponent title={'Back'} miniButton onPress={onGobackToHome} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPI: {
    marginTop: 18,
    marginLeft: 12,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 5,
    justifyContent: 'space-between',
  },
});

export default EquipmentScreen;
