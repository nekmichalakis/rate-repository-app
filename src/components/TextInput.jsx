import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: theme.colors.lightGrey,
    borderRadius: 3,
    padding: 8,
    marginVertical: 5,
  }
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput]
  const errorInputStyle = [{...textInputStyle[0], borderColor: theme.colors.errorRed}]

  return <NativeTextInput
      style={error ? errorInputStyle : textInputStyle}
      placeholderTextColor={theme.colors.lightGrey}
      {...props}
    />
};

export default TextInput