import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View, } from 'react-native';
import { styles } from '../src/styles';
import { useState } from 'react';
import { auth } from '../src/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';
import Button from './button';
import { AntDesign } from '@expo/vector-icons';
import Home from './home';
import AngelContact from './angelContact';


export default function App() {

  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const router = useRouter();




  function replacePass() {
    router.replace('/replacePass');

  }


  function newUser() {
    router.replace('/newUser');
  }

  function userLogin() {
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })

  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}> Login no Sistema </Text>
      <TextInput
        style={styles.formInput}
        placeholder="Informe o E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={userMail}
        onChangeText={setUserMail}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Informe a senha"
        autoCapitalize="none"
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      />
      <Button onPress={userLogin} label="Logar" />
      <Pressable onPress={replacePass}>
        <Text style={styles.forgotPassword}>
          Esqueci a senha <AntDesign name="arrowright" size={16} color="blue" />
        </Text>
      </Pressable>
      <Pressable onPress={newUser}>
        <Text style={styles.createNewAccount}>
          Cadastrar <AntDesign name="arrowright" size={16} color="blue" />
        </Text>
      </Pressable>


    </View>



  );


};
