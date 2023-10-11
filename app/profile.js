import { Pressable, Text, View } from "react-native";
import { styles } from "../src/styles";
import { auth } from "../src/firebase.config";
import { useRouter } from "expo-router";
import { signOut } from 'firebase/auth';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Home() {

    const currentUser = auth.currentUser;
    const router = useRouter();

    if (currentUser != null) {
        //Usuário Logado
    } else {
        alert('É necessário estar logado para utilizar este recurso!');
        router.replace('/');
    }

    function home() {
        router.replace('/home');
    }

    function logout() {
        signOut(auth)
            .then(() => {
                alert('Você desconectou-se do sistema!');
                router.replace('/');
            })
            .catch((error) => {
                const errorMessage = error.errorMessage;
                alert(errorMessage);

            });

    }

    return (
        <View style={styles.internalContainer}>
            <View style={styles.topBar}>
                <Pressable
                    onPress={logout}
                >
                    <Ionicons name="log-out" size={32} color={'white'} />
                </Pressable>
                <Pressable
                    onPress={home}
                >
                    <Ionicons name="home" size={32} color={'white'} />
                </Pressable>
            </View>
            <Text style={styles.formTitle}>Profile</Text>
        </View>
    );
}