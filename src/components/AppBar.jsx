import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 30,
    padding: 15,
    backgroundColor: '#24292e',
    flexDirection: 'row'
  },
  menuItem: {
    marginRight: 20
  },
  textBar: {
    color: 'white',
    fontWeight: 'bold'
  }
})

const AppBar = () => {
    return (
        <View style={styles.container}>
          <ScrollView horizontal>
            <Pressable style={styles.menuItem}>
              <Link to='/'>
                <Text style={styles.textBar}>Repositories</Text>
              </Link>
            </Pressable>
            <Pressable>
              <Link to='/signIn'>
                <Text style={styles.textBar}>Sign In</Text>
              </Link>
            </Pressable>
          </ScrollView>
        </View>
    )
}

export default AppBar