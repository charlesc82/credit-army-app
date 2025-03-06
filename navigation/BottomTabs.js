import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/dashboard/HomeScreen";
import PlansScreen from "../screens/subscriptions/PlansScreen";
import WalletScreen from "../screens/wallet/WalletScreen";
import HelpScreen from "../screens/support/HelpScreen";
import AccountScreen from "../screens/profile/AccountScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const tabBarOptions = (name, IconComponent, iconName) => ({
    title: name,
  headerShown: false,
  tabBarIcon: ({ color, size }) => (
    <IconComponent name={iconName} color={color} size={size} />
  ),
});

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={tabBarOptions('Home', MaterialCommunityIcons, "home")}
      />
      <Tab.Screen
        name="Plans"
        component={PlansScreen}
        options={tabBarOptions('Plans', FontAwesome5, "clipboard-list")}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={tabBarOptions('Wallet', MaterialCommunityIcons, "wallet")}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={tabBarOptions('Help', AntDesign, "customerservice")}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={tabBarOptions('Account', MaterialCommunityIcons, "account")}
      />
    </Tab.Navigator>
  );
}
