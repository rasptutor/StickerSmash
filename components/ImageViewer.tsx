import { ImageBackground, ImageBackgroundProps, StyleSheet, Text } from "react-native";
import { Image, type ImageSource } from "expo-image";
import React from "react";

type Props = {
  //image: ImageBackgroundProps;
  imgSource: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return (
    <><ImageBackground source={imgSource} style={styles.image}>
        /* @info Nest your content inside of the ImageBackground component */
        <Text style={styles.text}>Elements</Text>
        <Text style={styles.text}>in Front of</Text>
        <Text style={styles.text}>Background</Text>
      </ImageBackground><Image source={imageSource} style={styles.image} />
    </>);
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
