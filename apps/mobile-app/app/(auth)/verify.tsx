import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/stores/auth.store';

export default function VerifyScreen() {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { phone, verifyOtp } = useAuthStore();

  const handleVerify = async () => {
    setLoading(true);
    const success = await verifyOtp(otp);
    setLoading(false);

    if (success) {
      router.replace('/(app)/(tabs)');
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>
        Enter the code sent to {phone || 'your phone'}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter 4-digit OTP"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
        maxLength={4}
        autoFocus
      />

      <TouchableOpacity
        style={[styles.button, (otp.length < 4 || loading) && styles.buttonDisabled]}
        onPress={handleVerify}
        disabled={otp.length < 4 || loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Verifying...' : 'Verify'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 16,
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});