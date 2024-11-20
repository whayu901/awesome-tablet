/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import EquipmentSelector from '../../components/EquipmentSelector';
import {PriorityList} from '../../constant';
import {useSendData} from './hooks/useSendData';
import TextField from '../../components/TextField';
import ButtonComponent from '../../components/Button';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import PickFiles from '../../components/PickFiles';

const SendDataScreen = () => {
  const {priorityValue, setPriorityValue, date, setDate, open, setOpen} =
    useSendData();

  return (
    <View style={{flex: 1, marginLeft: 12, marginRight: 12}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <EquipmentSelector isHideCritical={true} />

        <View style={styles.containerPriority}>
          <Text style={styles.labelPriority}>Priority</Text>

          <View style={{flex: 1.25}}>
            <Dropdown
              data={PriorityList}
              labelField="label"
              valueField="value"
              value={priorityValue}
              placeholder="Select item"
              style={styles.dropdown}
              searchPlaceholder="Search..."
              onChange={value => setPriorityValue(value)}
            />
          </View>
        </View>
        <View>
          <TextField
            label={'Description'}
            placeholder={'Hear some abnormal noise'}
            isMultiline
          />
        </View>

        <View style={styles.containerPriority}>
          <Text>Malfunction Start</Text>

          <View style={{flex: 0.82}}>
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={styles.datePicker}>
              <Text>{moment(date).format('dd/mm/YYYY')}</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"
              onConfirm={value => {
                setOpen(false);
                setDate(value);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        </View>

        <View>
          <PickFiles />
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <ButtonComponent title={'Submit'} miniButton />

        <ButtonComponent title={'Cancel'} miniButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPriority: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 18,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    padding: 10,
  },

  datePicker: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    padding: 10,
  },
  labelPriority: {
    flex: 1,
  },
});

export default SendDataScreen;
