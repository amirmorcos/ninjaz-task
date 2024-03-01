import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import PostsScreen from "../../screens/PostsScreen/PostsScreen";
import NotificationScreen from "../../screens/NotificationScreen/NotificationScreen";
import SettingsScreen from "../../screens/SettingsScreen/SettingsScreen";
import Colors from "../../theme/colors";
import { Icon } from "../../components/atoms";
import styles from "./styles";

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name="Posts"
      component={PostsScreen}
      options={{
        tabBarLabelStyle: styles.label,
        tabBarActiveTintColor: Colors.BLACK,
        tabBarIcon: () => <Icon name="home" color="BLUE" />,
      }}
    />
    <BottomTab.Screen
      name="Tab2"
      component={NotificationScreen}
      options={{
        tabBarLabelStyle: styles.label,
        tabBarActiveTintColor: Colors.BLACK,
        tabBarIcon: () => <Icon name="notifications" color="BLUE" />,
      }}
    />
    <BottomTab.Screen
      name="Tab3"
      component={SettingsScreen}
      options={{
        tabBarLabelStyle: styles.label,
        tabBarActiveTintColor: Colors.BLACK,
        tabBarIcon: () => <Icon name="settings" color="BLUE" />,
      }}
    />
  </BottomTab.Navigator>
);

export default BottomNavigation;
