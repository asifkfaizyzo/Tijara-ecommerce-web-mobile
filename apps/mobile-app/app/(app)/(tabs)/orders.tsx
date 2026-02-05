import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const ORDERS = [
  { id: '1', date: '2025-01-15', status: 'delivered', amount: 5000 },
  { id: '2', date: '2025-01-14', status: 'shipped', amount: 3200 },
  { id: '3', date: '2025-01-13', status: 'pending', amount: 1500 },
];

const STATUS_COLORS: Record<string, string> = {
  pending: '#FFA500',
  packed: '#9C27B0',
  shipped: '#2196F3',
  delivered: '#4CAF50',
};

export default function OrdersScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/(app)/order/${item.id}`)}
          >
            <View style={styles.row}>
              <Text style={styles.orderId}>Order #{item.id}</Text>
              <View style={[styles.badge, { backgroundColor: STATUS_COLORS[item.status] }]}>
                <Text style={styles.badgeText}>{item.status}</Text>
              </View>
            </View>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.amount}>₹{item.amount}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderId: {
    fontSize: 18,
    fontWeight: '600',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  date: {
    color: '#666',
    marginBottom: 4,
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0066cc',
  },
});
