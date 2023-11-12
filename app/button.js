// Button.js
import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../src/styles';

export default function Button({ onPress, label }) {
    return (
        <Pressable style={styles.formButton} onPress={onPress}>
            <Text style={styles.textButton}>{label}</Text>
        </Pressable>
    );
}