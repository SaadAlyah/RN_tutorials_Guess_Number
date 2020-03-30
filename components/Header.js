import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        height: 90,
        paddingTop: 36,
        alignItems: "center",
        backgroundColor: "#F7287b"
    },
    text: {
        fontSize: 23,
    }
});

export default Header;
