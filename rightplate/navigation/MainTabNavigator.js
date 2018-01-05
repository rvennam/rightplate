import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Icon} from 'react-native-elements';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import BadgesScreen from '../screens/BadgesScreen';
import PlacesScreen from '../screens/PlacesScreen';
import PlacesDetailScreen from '../screens/PlaceDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PlacesNavigation from '../screens/PlacesNavigation';

export default TabNavigator(
	{
		CheckIn: {
			screen: PlacesNavigation,
			navigationOptions : ({navigation}) => ({header: null})
		},
		'Badges': {
			screen : BadgesScreen,
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
				case 'CheckIn':
					iconName = 'add-circle-outline';
					break;
				case 'Badges':
					iconName = 'bookmark-border';
					break;
				case 'Settings':
					iconName ='settings';
				}
				return (
					<Icon
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
