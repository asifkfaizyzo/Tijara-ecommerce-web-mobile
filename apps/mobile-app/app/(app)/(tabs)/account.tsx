import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/stores/auth.store';

export default function AccountScreen() {
  const router = useRouter();
  const { phone, logout } = useAuthStore();

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      { 
        text: 'Logout', 
        style: 'destructive',
        onPress: () => {
          logout();
          router.replace('/(auth)/login');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.avatar}>👤</Text>
        <Text style={styles.phone}>{phone || 'User'}</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/(app)/locations')}
        >
          <Text style={styles.menuIcon}>📍</Text>
          <Text style={styles.menuText}>Saved Locations</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>💳</Text>
          <Text style={styles.menuText}>Pending Payments</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🔔</Text>
          <Text style={styles.menuText}>Notifications</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    fontSize: 64,
    marginBottom: 8,
  },
  phone: {
    fontSize: 18,
    fontWeight: '600',
  },
  menu: {
    backgroundColor: '#fff',
    marginTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  menuArrow: {
    fontSize: 20,
    color: '#999',
  },
  logoutButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#ff4444',
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
