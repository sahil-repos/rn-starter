import React from "react";
import { Text, StyleSheet ,View, Button,TouchableOpacity} from "react-native";

const HomeScreen = props => {
  //console.log(props)
  return (
    <View>
  <Text style={styles.text}>Changed222 text</Text>
  <Button 
  title="Goto Componenets demo"
  onPress={()=>props.navigation.navigate('Components')}
  />
<Button
title="Go to List demo"
onPress={()=>{navigation.navigate('List')}}
/>

  <TouchableOpacity onPress={()=>{props.navigation.navigate('List')}}>
    <Text>
      Go to TouchableOpacity test
    </Text>
  </TouchableOpacity>
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  }
});

export default HomeScreen;
