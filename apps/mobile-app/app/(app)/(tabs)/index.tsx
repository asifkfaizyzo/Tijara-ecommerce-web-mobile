import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const PRODUCTS = [
  { id: '1', name: 'Sodium Hydroxide', price: 150, unit: 'kg' },
  { id: '2', name: 'Hydrochloric Acid', price: 200, unit: 'L' },
  { id: '3', name: 'Sulfuric Acid', price: 180, unit: 'L' },
  { id: '4', name: 'Ethanol', price: 120, unit: 'L' },
];

export default function ProductsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/(app)/product/${item.id}`)}
          >
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>
              ₹{item.price}/{item.unit}
            </Text>
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
  productName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#0066cc',
  },
});
