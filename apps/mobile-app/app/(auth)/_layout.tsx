import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen 
        name="login" 
        options={{ 
          title: 'Login',
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="verify" 
        options={{ 
          title: 'Verify OTP',
        }} 
      />
    </Stack>
  );
}