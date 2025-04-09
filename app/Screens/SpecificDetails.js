import React from "react";
import { View, Text, Button } from "react-native";

const SpecificDetails=({navigation})=>{
    return(
       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontWeight:'bold', fontSize:60, color:'yellow'}}>This is Specific Details Screen</Text>
        <Button title="Home" onPress={()=>navigation.navigate('Home')}/>
       </View>
    );
}

export default SpecificDetails