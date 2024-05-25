import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { FinancialProvider } from './FinancialContext';
import MyTabs from './navigation/MyTabs'

const App = () => {
  return (
    <FinancialProvider>
      <NavigationContainer>
        <MyTabs />
        <StatusBar style="auto" />
      </NavigationContainer>
    </FinancialProvider>
  );
};

export default App;