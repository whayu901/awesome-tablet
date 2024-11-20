import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const TextField = ({placeholder, disabled, label}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={{flex: 0.7}}>
        <TextInput
          multiline
          textAlignVertical="top"
          numberOfLines={4}
          style={[styles.input, disabled && styles.disabled]}
          placeholder={placeholder}
          editable={!disabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  disabled: {
    backgroundColor: 'grey',
  },
  label: {
    flex: 1,
    marginTop: 15,
  },
});

export default TextField;
