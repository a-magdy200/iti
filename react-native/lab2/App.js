import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import Cars from "./screens/Cars";
import Users from "./screens/Users";
import Contact from "./screens/Contact";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack'
import AntDesign from "react-native-vector-icons/AntDesign";
import CarDetails from "./screens/CarDetails";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const CarsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={"Cars"} component={Cars} />
    <Stack.Screen name={"CarDetails"} component={CarDetails} />
  </Stack.Navigator>
);
const UsersStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={"Users"} component={Users} />
  </Stack.Navigator>
);
const ContactStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={"Contact"} component={Contact} />
  </Stack.Navigator>
);
export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={() => ({tabBarIcon: () => <AntDesign name={"car"} size={20} color={"white"}/>})}
            name="Cars"
            component={CarsStack}/>
          <Tab.Screen
            options={() => ({tabBarIcon: () => <AntDesign name={"user"} size={20} color={"white"}/>, title: <Text>Users</Text>})}
            name="Users"
            component={UsersStack}/>
          <Tab.Screen
            options={() => ({tabBarIcon: () => <AntDesign name={"phone"} size={20} color={"white"}/>})}
            name="Contact"
            component={ContactStack}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
