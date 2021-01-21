import React, {useState}from 'react'
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

const App = () => {  

  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionResult.granted === false) {
      alert('permission to access camera is required!')
      return;
    }

    const imageResult = await ImagePicker.launchImageLibraryAsync()

    if (imageResult.cancelled === true) {
      return;
    }

    setSelectedImage({localUri: imageResult.uri})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an Image!</Text>
      <Image
        source={{uri: selectedImage !== null ? selectedImage.localUri :'https://picsum.photos/200/200'}}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => openImagePickerAsync()}
      >
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems:'center',
    backgroundColor: '#292929'
    
  },
  title: {fontSize:30, color: '#fff'},
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'contain'
  },
  button: {
    alignItems: "center",
    backgroundColor: "blueviolet",
    padding: 10,
    marginTop: 10
  },
  buttonText: {
    color: '#fff'
  }
})

export default App;