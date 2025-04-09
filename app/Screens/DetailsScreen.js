import React from "react";
import { View, Text, Button } from "react-native";

const DetailsScreen=({navigation})=>{
    return(
       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontWeight:'black', fontSize:60}}>This is Details Screen</Text>
        <Button title="Get more Deatils" onPress={()=>navigation.navigate('More Details')}/>
       </View>
    );
}

export default DetailsScreen