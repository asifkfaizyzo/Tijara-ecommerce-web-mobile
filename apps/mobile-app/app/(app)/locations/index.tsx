import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function LocationsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.empty}>No saved locations yet</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/(app)/locations/add')}
      >
        <Text style={styles.buttonText}>Add Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  empty: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },
  button: {
    padding: 16,
    backgroundColor: '#0066cc',
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});