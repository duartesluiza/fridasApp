import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../src/styles';
import { auth } from '../src/firebase.config';
import { firestore } from '../src/firebase.config';
import { useRouter } from 'expo-router';
import { addDoc, collection } from 'firebase/firestore';



export default function AngelContact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();

    const saveAngelContact = async () => {
        try {
            // Validação básica
            if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
                alert('Todos os campos devem ser preenchidos.');
                return;
            }

            // Adiciona o contato "Anjo" ao Firestore
            const contactsCollection = collection(firestore, 'angelContacts');
            await addDoc(contactsCollection, { name, phone, email, userId: auth.currentUser.uid });

            // Alerta de sucesso
            alert(`Contato "Anjo" ${name} cadastrado com sucesso!`);

            // Redirecionando para a tela inicial
            router.replace('/home');
        } catch (error) {
            // Tratamento dos erros
            const errorMessage = error.message || 'Erro desconhecido ao cadastrar o contato "Anjo".';
            alert(errorMessage);
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.formTitle}>Cadastro do Contato Anjo</Text>
            <TextInput
                style={styles.formInput}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Telefone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                style={styles.formInput}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                value={email}
                onChangeText={setEmail}
            />
            <Pressable
                style={styles.formButton}
                onPress={saveAngelContact}
            >
                <Text style={styles.textButton}>
                    Salvar Contato
                </Text>
            </Pressable>





        </View>
    );
}