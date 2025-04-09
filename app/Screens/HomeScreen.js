import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen=({navigation})=>{
    return(
       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontWeight:'bold', fontSize:60, color:'blue'}}>This is Home Screen</Text>
        <Button title="Get Info" onPress={()=>navigation.navigate('Details')}/>
       </View>
    );
}

export default HomeScreen