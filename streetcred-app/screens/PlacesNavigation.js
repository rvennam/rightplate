
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import PlaceDetailScreen from './PlaceDetailScreen';
import PlacesScreen from './PlacesScreen';

const PlacesNavigation = StackNavigator({
	
	CheckIn: {
		screen: PlacesScreen,
		navigationOptions:({navigation}) => ({
			header: null
		})
	},
	Detail: {
		screen: PlaceDetailScreen,
	}
});

export default PlacesNavigation;