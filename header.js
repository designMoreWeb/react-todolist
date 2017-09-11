import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Header extends Component{
   render() {
      return(
         <View style={styles.header}>
            <TouchableOpacity onPress={this.props.onToggleAllComplete}>
               <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
            </TouchableOpacity>
            <TextInput
               value={this.props.value}
               onChangeText={this.props.onChange}
               onSubmitEditing={this.props.onAddItem}
               placeholder="What Needs to Be Done?"
               blurOnSubmit={false}
               returnKeyType="done"
               style={styles.input}
            />
         </View>
         );
   }
}
const styles =StyleSheet.create({
   header:{
      paddingHorizontal: 16,
      flexDirection: "row",
      justifyContent:"space-around",
      alignItems:"center",
      backgroundColor:'#FF6600'
   },
      toggleIcon:{
         fontSize: 30,
         color:"#57bfa7"
      },
   input:{
      flex: 1,
      marginLeft:15,
      height:50
   }
})
export default Header;
