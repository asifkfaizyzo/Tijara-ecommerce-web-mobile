import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useCartStore } from '@/stores/cart.store';

const PRODUCTS: Record<string, { name: string; price: number; unit: string; description: string }> = {
  '1': { name: 'Sodium Hydroxide', price: 150, unit: 'kg', description: 'Industrial grade NaOH' },
  '2': { name: 'Hydrochloric Acid', price: 200, unit: 'L', description: 'Concentrated HCl solution' },
  '3': { name: 'Sulfuric Acid', price: 180, unit: 'L', description: 'Battery grade H2SO4' },
  '4': { name: 'Ethanol', price: 120, unit: 'L', description: 'Denatured ethyl alcohol' },
};

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const addItem = useCartStore((state) => state.addItem);
  
  const product = PRODUCTS[id || '1'];

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>₹{product.price}/{product.unit}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => addItem(id || '1', product.name)}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    color: '#0066cc',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  button: {
    margin: 16,
    padding: 16,
    backgroundColor: '#0066cc',
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});