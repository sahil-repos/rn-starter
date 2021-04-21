import React from "react";
import { Text, StyleSheet ,View, Button,TouchableOpacity} from "react-native";

const HomeScreen = () => {
  return (
    <View>
  <Text style={styles.text}>Changed222 text</Text>
  <Button 
  title="Goto Componenets demo"
  onPress={()=>{console.log('Button pressed')

  }}
  />
  <TouchableOpacity onPress={()=>{console.log('Pressed touchable opacity')}}>
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
