import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

class Row extends Component{
   render() {
      return(
         <View style={styles.container}>
            <Switch
               value={this.props.complete}
            />
            <Text style={styles.text}>{this.props.text}</Text>
         </View>
         );
   }
}
const styles = StyleSheet.create({
   container: {
      padding:10,
      flexDirection:"row",
      alignItems: "flex-start",
      justifyContent: 'space-between'
   },
   text:{
      fontSize: 24,
      color:"#4d4d4d",
   }
})

export default Row;