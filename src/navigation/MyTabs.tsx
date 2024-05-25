// ./src/navigation/MyTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../modules/Category/CategoriesScreen';
import IncomeScreen from '../modules/Transactions/IncomeScreen';
import OverviewScreen from '../modules/Overview/OverviewScreen';
import AccountsScreen from '../modules/Accounts/AccountsScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const now = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonthName = monthNames[now.getMonth()];
  const currentYear = now.getFullYear();
  
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
      }
    })}
    >
      <Tab.Screen 
        name="Expenses"
        component={CategoriesScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="apps-outline" size={size} color={color} />
          ),
          headerTitle: `Expenses for ${currentMonthName} ${currentYear}`
        }}
      />
      <Tab.Screen 
        name="Income" 
        component={IncomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="swap-vertical-outline" size={size} color={color} /> 
          ),
          headerTitle: `Income for ${currentMonthName} ${currentYear}`
        }}
      />
      <Tab.Screen 
        name="Financial Overview" 
        component={OverviewScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pie-chart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Accounts" 
        component={AccountsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
