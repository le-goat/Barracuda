import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ResearchButton from "./sources/components/ResearchButton";

export default function App() {
  return (
    <View style={styles.container}>
      <ResearchButton/>
      <Text>Open up App.tsx to start working on your app!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
