import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen 
        name="product/[id]" 
        options={{ 
          headerShown: true,
          title: 'Product Details',
        }} 
      />
      <Stack.Screen 
        name="order/[id]" 
        options={{ 
          headerShown: true,
          title: 'Order Details',
        }} 
      />
      <Stack.Screen 
        name="locations/index" 
        options={{ 
          headerShown: true,
          title: 'Saved Locations',
        }} 
      />
      <Stack.Screen 
        name="locations/add" 
        options={{ 
          headerShown: true,
          title: 'Add Location',
        }} 
      />
    </Stack>
  );
}