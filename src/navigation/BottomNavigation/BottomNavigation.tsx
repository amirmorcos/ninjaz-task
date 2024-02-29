import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import PostsScreen from "../../screens/PostsScreen/PostsScreen";
import NotificationScreen from "../../screens/NotificationScreen/NotificationScreen";
import SettingsScreen from "../../screens/SettingsScreen/SettingsScreen";
import Colors from "../../theme/colors";
import { Icon } from "../../components/atoms";

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name="Posts"
      component={PostsScreen}
      options={{
        tabBarActiveTintColor: Colors.BLACK,
        tabBarIcon: () => <Icon name="home" color="BLUE" />,
      }}
    />
    <BottomTab.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{
        tabBarActiveTintColor: "black",
        tabBarIcon: () => <Icon name="notifications" color="BLUE" />,
      }}
    />
    <BottomTab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarActiveTintColor: "black",
        tabBarIcon: () => <Icon name="settings" color="BLUE" />,
      }}
    />
  </BottomTab.Navigator>
);

export default BottomNavigation;
