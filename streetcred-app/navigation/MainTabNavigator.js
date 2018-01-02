import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import BadgesScreen from '../screens/BadgesScreen';
import CheckInScreen from '../screens/CheckInScreen';
import PlacesDetailScreen from '../screens/PlaceDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PlacesNavigation from '../screens/PlacesNavigation';

export default TabNavigator(
	{
		Badges: {
			screen : BadgesScreen,
			navigationOptions : ({navigation}) => ({header: null})
		},
		CheckIn: {
			screen: PlacesNavigation,
			navigationOptions : ({navigation}) => ({header: null})
		},
		Settings: {
			screen: SettingsScreen,
		}
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused }) => {
				const { routeName } = navigation.state;
				let iconName;
				switch (routeName) {
				case 'Home':
					iconName =
              Platform.OS === 'ios'
              	? `ios-information-circle${focused ? '' : '-outline'}`
              	: 'md-information-circle';
					break;
				case 'Links':
					iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
					break;
				case 'Settings':
					iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
				}
				return (
					<Ionicons
						name={iconName}
						size={28}
						style={{ marginBottom: -3 }}
						color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
					/>
				);
			},
		}),
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
	}
);
