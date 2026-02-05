import { View, Text, StyleSheet } from 'react-native';

export default function AddLocationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>Map will be here</Text>
      <Text style={styles.subtext}>Location picker coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    fontSize: 18,
    color: '#666',
  },
  subtext: {
    marginTop: 8,
    color: '#999',
  },
});