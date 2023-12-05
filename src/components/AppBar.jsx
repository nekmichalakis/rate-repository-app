import { View, StyleSheet, Pressable, Text } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 15,
    padding: 15,
    backgroundColor: '#24292e'
  },
  textBar: {
    color: 'white',
    fontWeight: 'bold'
  }
})

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable>
                <Text style={styles.textBar}>Repositories</Text>
            </Pressable>
        </View>
    )
}

export default AppBar