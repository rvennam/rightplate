
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import PlaceDetailScreen from './PlaceDetailScreen';
import PlacesScreen from './PlacesScreen';
import CheckInScreen from './CheckInScreen';
import { Button, Icon} from 'react-native-elements';

const PlacesNavigation = StackNavigator({
	
	Places: {
		screen: PlacesScreen,
		navigationOptions:({navigation}) => ({
			header: null,
			tabBarIcon: ({ tintColor }) => (
				<Icon
					type='simple-line-icon'
					name='settings' />
			)
		})
	},
	Detail: {
		screen: PlaceDetailScreen,
	},
	CheckIn: {
		screen: CheckInScreen
	}
});

export default PlacesNavigation;