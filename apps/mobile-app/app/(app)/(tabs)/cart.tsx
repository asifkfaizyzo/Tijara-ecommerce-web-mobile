import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useCartStore } from '@/stores/cart.store';

export default function CartScreen() {
  const { items, removeItem, clear } = useCartStore();

  if (items.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyIcon}>🛒</Text>
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.quantity}>x{item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.clearButton} onPress={clear}>
          <Text style={styles.clearText}>Clear Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  quantity: {
    fontSize: 16,
    color: '#666',
  },
  remove: {
    color: '#ff4444',
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  clearButton: {
    flex: 1,
    padding: 16,
    marginRight: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  clearText: {
    color: '#666',
    fontWeight: '600',
  },
  orderButton: {
    flex: 2,
    padding: 16,
    backgroundColor: '#0066cc',
    borderRadius: 12,
    alignItems: 'center',
  },
  orderText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
