import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import MyCart from './components/screens/MyCart';
import ProductInfo from './components/screens/ProductInfo';
import ToastManager from 'toastify-react-native';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name="ProductInfo" component={ProductInfo} />
        </Stack.Navigator>
        <ToastManager />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
