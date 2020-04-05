import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const NewGame = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Start a New Game!</Text>
            <View style={styles.card}>
                <Text>Select a Number</Text>
                <TextInput/>
                <View style={styles.buttons}>
                    <Button title="Reset" />
                    <Button title="Confirm" />
                </View>
                
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 20
    },
    title: {
        fontSize: 20,
    },
    card: {
        justifyContent: "center",
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        paddingTop: 20,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%',
        margin: 25,
    },
});

export default NewGame;
