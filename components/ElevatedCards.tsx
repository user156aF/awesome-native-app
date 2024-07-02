import {
    View, 
    Text, 
    StyleSheet,
    ScrollView,
  } from 'react-native'
  
  
  const styles = StyleSheet.create({
      container:{
        position: 'relative'
      },headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
      },flatCard: {
          height: 100,
          width: 100,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 10
      },cardOne: {
        backgroundColor: 'red'
      },cardTwo: {
        backgroundColor: 'yellow'
      },cardThree: {
        backgroundColor: 'green'
      },cardFour: {
        backgroundColor: 'white'
      },
    })
    
  export default function ElevatedCards(): JSX.Element{
      return (
        <View>
            <Text style = {styles.headingText}>
                Elevated Cards
            </Text>
        <ScrollView horizontal = {true} style = {styles.container}>
          <View style = {[styles.flatCard, styles.cardOne]}><Text>Red</Text></View>
          <View style = {[styles.flatCard, styles.cardTwo]}><Text>Red</Text></View>
          <View style = {[styles.flatCard, styles.cardThree]}><Text>Red</Text></View>
          <View style = {[styles.flatCard, styles.cardFour]}><Text>Red</Text></View>
        </ScrollView>
        </View>
      )
  }