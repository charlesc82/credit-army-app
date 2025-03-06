import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const HelpScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Text style={styles.text}>Help Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HelpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})