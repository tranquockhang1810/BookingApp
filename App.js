import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Define a Login Screen component
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry={true}
      />
      <View style={styles.button}>
        <Button 
          color='black'
          title="Login" 
          onPress={() => navigation.navigate("Home")} 
        /> 
      </View>
      
    </View>
  );
};

// Define a Home Screen component
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

// Define the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 30,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  button: {
    width: 300,
    height: 40,
    margin: 10,
  },
});

// Export the App component that renders the Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: '' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          screenOptions={{
          title: '',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
