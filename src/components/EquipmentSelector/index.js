import React from 'react';
const {View, Text, StyleSheet, TextInput} = require('react-native');

const EquipmentSelector = ({isHideCritical = false}) => {
  return (
    <View>
      <View style={styles.equipmentContainer}>
        <Text style={styles.label}>Equipment Name</Text>
        <View style={styles.equipmentTextInput}>
          <Text style={styles.textInput}>CIRCULATION PUMP</Text>
        </View>
      </View>
      <View style={styles.equipmentContainer}>
        <Text style={styles.label} numberOfLines={2}>
          Functional Location
        </Text>
        <View style={styles.equipmentTextInput}>
          <Text style={styles.textInput}>803-93290392-32903290320</Text>
        </View>
      </View>

      {!isHideCritical && (
        <>
          <View style={styles.equipmentContainer}>
            <Text style={styles.label} numberOfLines={2}>
              Criticaly
            </Text>
            <View style={styles.equipmentTextInput}>
              <Text style={styles.textInput}>B</Text>
            </View>
          </View>
          <View style={styles.equipmentContainer}>
            <Text style={styles.label} numberOfLines={2}>
              Work Center
            </Text>
            <View style={styles.equipmentTextInput}>
              <Text style={styles.textInput}>MECFL1G1</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  equipmentContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  textInput: {
    borderRadius: 8,
    height: 50,
    paddingLeft: 10,
    marginLeft: 24,
    marginTop: 20,
    backgroundColor: 'grey',
    color: '#191E24',
    paddingRight: 10,
    paddingTop: 12,
  },
  label: {
    fontSize: 14,
    marginTop: 25,
    flex: 1,
  },
  equipmentTextInput: {
    flex: 1.7,
  },
});

export default EquipmentSelector;
