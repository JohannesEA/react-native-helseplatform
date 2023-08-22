import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const SuccessAnimation = () => {
  return (
    <View style={styles.lottieAnimationContainer}>
      <LottieView
        duration={3000} // 3 seconds
        loop={true}
        resizeMode="cover" // This ensures the animation covers its container
        style={styles.lottieAnimation}
        source={require("../../assets/animations/successAnimation2.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lottieAnimationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottieAnimation: {
    // Define your styles for the animation itself, e.g. width and height
    width: "100%",
    height: "100%",
  },
});

export default SuccessAnimation;
