import React, {memo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {launchCamera} from 'react-native-image-picker';
import {createThumbnail} from 'react-native-create-thumbnail';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icon

import ButtonComponent from '../Button';

const PickFiles = () => {
  const [showModalChooseType, setShowModalChooseType] = useState(false);

  const [mediaList, setMediaList] = useState([]);

  const handleMediaCapture = async type => {
    const options = {
      mediaType: type,
      videoQuality: 'high', // For videos, you can set the quality
    };

    launchCamera(options, async response => {
      if (response.didCancel || response.errorMessage) {
        console.log(
          'User canceled or an error occurred:',
          response.errorMessage,
        );
        return;
      }

      const {uri, type: fileType} = response.assets[0];
      const newMedia = {uri, type: fileType};

      if (type === 'video') {
        // Generate thumbnail for the video
        try {
          const thumbnail = await createThumbnail({url: uri});
          newMedia.thumbnail = thumbnail.path;
        } catch (err) {
          console.error('Error creating thumbnail:', err);
        }
      }

      // Add to media list
      setMediaList(prev => [...prev, newMedia]);
    });
  };

  const renderMediaItem = ({item, index}) => (
    <View style={styles.mediaItem}>
      {item.type.startsWith('video') ? (
        <>
          <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
          <Icon
            name="play-circle-outline"
            size={30}
            color="white"
            style={styles.playIcon}
          />
          <TouchableOpacity
            onPress={() => deleteMediaItem(index)}
            style={styles.deleteIcon}>
            <Icon name="delete-outline" color="red" size={20} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Image source={{uri: item.uri}} style={styles.image} />
          <TouchableOpacity
            onPress={() => deleteMediaItem(index)}
            style={styles.deleteIcon}>
            <Icon name="delete-outline" color="red" size={20} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );

  const deleteMediaItem = index => {
    Alert.alert('Delete', 'Are you sure you want to delete this file?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          setMediaList(prev => prev.filter((_, i) => i !== index));
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setShowModalChooseType(true)}
          style={{marginRight: 10}}>
          <AntDesign name="pluscircleo" size={45} />
        </TouchableOpacity>
        <FlatList
          data={mediaList}
          scrollEnabled={false}
          horizontal
          renderItem={renderMediaItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
      </View>

      {/* Modal Choose Type File */}
      <Modal
        visible={showModalChooseType}
        transparent
        onDismiss={() => setShowModalChooseType(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.chooseFileContainer}>
              <TouchableOpacity
                onPress={() => {
                  handleMediaCapture('image');
                  setShowModalChooseType(false);
                }}>
                <FontAwesome name="camera" size={50} />
                <Text style={styles.labelChooseFile}>Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleMediaCapture('video');
                  setShowModalChooseType(false);
                }}>
                <FontAwesome name="video-camera" size={50} />
                <Text style={styles.labelChooseFile}>Video</Text>
              </TouchableOpacity>
            </View>

            <ButtonComponent
              title={'Close'}
              onPress={() => setShowModalChooseType(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  deleteIcon: {
    position: 'absolute',
    left: '65%',
  },
  playIcon: {
    position: 'absolute',
    top: '70%',
    left: '69%',
    transform: [{translateX: -25}, {translateY: -25}], // Center the icon
  },
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    marginTop: 16,
  },
  mediaItem: {
    marginBottom: 16,
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  chooseFileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  labelChooseFile: {
    fontSize: 16,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default memo(PickFiles);
