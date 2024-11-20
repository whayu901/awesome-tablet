import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const TextField = ({
  placeholder,
  disabled,
  label,
  position = 'row',
  isMultiline,
}) => {
  return (
    <>
      {position === 'row' ? (
        <View style={[styles.container]}>
          <View>
            <Text style={styles.label}>{label}</Text>
          </View>
          <View style={{width: '61%'}}>
            <TextInput
              multiline={isMultiline}
              textAlignVertical="top"
              numberOfLines={isMultiline ? 4 : 0}
              style={[styles.input, disabled && styles.disabled]}
              placeholder={placeholder}
              editable={!disabled}
            />
          </View>
        </View>
      ) : (
        <View style={{marginHorizontal: 10}}>
          <View>
            <Text style={styles.label}>{label}</Text>
          </View>
          <View>
            <TextInput
              multiline={isMultiline}
              textAlignVertical={isMultiline ? 'top' : 'auto'}
              numberOfLines={isMultiline ? 4 : 0}
              style={[styles.input, disabled && styles.disabled]}
              placeholder={placeholder}
              editable={!disabled}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 10,
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
