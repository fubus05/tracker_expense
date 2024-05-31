import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { FinancialProvider } from './FinancialContext';
import MyTabs from './navigation/MyTabs'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <FinancialProvider>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <MyTabs />
          <StatusBar style="auto" />
        </GestureHandlerRootView>
      </NavigationContainer>
    </FinancialProvider>
  );
};

export default App;