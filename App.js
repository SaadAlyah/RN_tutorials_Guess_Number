import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import NewGame from './screens/NewGame'

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Saad Alyah"/>
      <NewGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
