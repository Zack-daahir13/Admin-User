import { Alert, Button, Linking, View } from "react-native";
import React from "react";
import {Text} from "react-native-paper";

const HomeDemo = () => {
  function callMe(){
    const MyPhone = 'tel:*712*613673734*1#' //😉
    try{
      Linking.openURL(MyPhone)
    }catch(error){
      Alert.alert('ERROR HAPPENED', `${error}`)
    }
  }
  return (
    <View>
      <Text variant="displayLarge">HomeDemo</Text>
      <Button title="Call me" onPress={() => callMe()}/>
    </View>
  );
};

export default HomeDemo;
