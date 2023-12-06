import * as yup from 'yup'
import { Pressable, View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import Text from './Text'
import FormikTextInput from './FormikTextInput'
import theme from '../theme'

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    padding: 10
  },
  signInButton: {
    backgroundColor: theme.colors.buttonBlue,
    borderRadius: 3,
    padding: 10,
    marginVertical: 5
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
})

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} />
      <Pressable style={styles.signInButton} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {

  const onSubmit = (values) => {
    //const username = values.username
    //const password = values.password

    console.log(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn