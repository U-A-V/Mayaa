import React from "react";
import Video from "react-native-video";
import { StyleSheet, Text, View } from "react-native";
import App from "../App";
function Splashscreen({ navigation }) {
  setTimeout(() => {
    navigation.replace("Home");
  }, 4500);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: null,
        height: null,
      }}
    >
      <Video
        source={require("../../assets/launch_screen.mp4")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 1,
        }}
        muted={true}
        repeat={false}
        resizeMode="cover"
      />
    </View>
  );
}

export default Splashscreen;
