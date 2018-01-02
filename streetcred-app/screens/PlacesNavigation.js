
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import PlaceDetailScreen from './PlaceDetailScreen';
import CheckInScreen from './CheckInScreen';

const PlacesNavigation = StackNavigator({
	
	CheckIn: {
		screen: CheckInScreen,
		navigationOptions:({navigation}) => ({
			header: null
		})
	},
	Detail: {
		screen: PlaceDetailScreen,
		navigationOptions: (props) => ({
			title: 'Detail',
		})
	}
});

export default PlacesNavigation;