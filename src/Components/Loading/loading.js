import React from "react";
import AnimatedLottieView from "lottie-react-native";

const Loading = () => {
  return(
    <AnimatedLottieView 
      source={require(`../../assets/loadinganmtd.json`)}
      autoPlay
      style={{
        width: 400,
        height: 400,
        }}/>
  )
}
export default Loading
