 import React from 'react';
 import {Text,StyleSheet,View} from 'react-native';

 //returning jsx fn
 const ComponentScreen =()=>{
     const elem1=<Text style={styles.headerStyle} >Getting started with React Native!</Text>;
     const elem2=<Text style={styles.textStyle} >My name is Sahil </Text>

    return (
    <View>
    
    {elem1}
    {elem2}

    </View>
    );
 }; 




 //Stylsheet

 const styles=StyleSheet.create({
         headerStyle:{
             fontSize:45

         },
         textStyle:{
             fontSize:20
         }

     });


 //export the component

 export default ComponentScreen;
