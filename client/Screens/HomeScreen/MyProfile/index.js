import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import UpcomingTrips from "../UpcomingTrips";
import Icon from "react-native-vector-icons/Ionicons";
import BackArrow from "../BackArrow";
import ProfilePage from "../ProfilePage";

const Stack = createStackNavigator();

const MyProfile = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#02a3bb', //Set Header color
                    
                },
                headerLeft: () => <BackArrow />,
                headerTintColor: '#f7f4e5', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                    marginLeft: 80,
                    textAlign: 'center'
                },
            }}
        >
            <Stack.Screen name="My Profile" component={ProfilePage} />
        </Stack.Navigator>

    )
}
export default MyProfile;