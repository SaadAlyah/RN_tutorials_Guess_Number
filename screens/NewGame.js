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
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        paddingTop: 20,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 6,
        backgroundColor: 'white',
        elevation: 8,
        paddingTop: 20,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%',
        margin: 25,
    },
});

export default NewGame;
