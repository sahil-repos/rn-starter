import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

const ListScreen=()=>{
    const friendsArray=[
        {name:'Friend #1',age:12},
        {name:'Friend #2',age:22},
        {name:'Friend #3',age:32},
        {name:'Friend #4',age:42},
        {name:'Friend #5',age:52},
        {name:'Friend #6',age:62},
        {name:'Friend #7',age:72},
        {name:'Friend #8',age:82},
    ];
    return (
    <FlatList 
    //horizontal
    //showsHorizontalScrollIndicator={false}
    keyExtractor={(frnd)=>frnd.name}
    data={friendsArray} 
    renderItem={({item})=>{
        //element==={ item: {name: 'Friend #1'},index:0 }
            return <Text style={styles.textStyle}  >{item.name} {item.age}</Text>;
    }}
     />
    );
};


const styles= StyleSheet.create(
    {
        textStyle:{
            marginVertical:50
        }
    }
);

export default ListScreen;