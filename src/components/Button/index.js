import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonComponent = ({title, onPress, disabled, miniButton}) => {
  return (
    <View style={[styles.container, {width: miniButton ? '45%' : '100%'}]}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'black',
    width: '100%',
  },
});

export default ButtonComponent;
