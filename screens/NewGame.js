import React from 'react';
import { View, StyleSheet } from 'react-native';

const Page_Name = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Start a New Game</Text>
            
        </View>
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        fontSize: 32,
    },
});

export default Page_Name;
