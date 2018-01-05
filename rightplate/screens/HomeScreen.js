import React from 'react';
import {
	TabNavigator,
} from 'react-navigation';

import BadgesScreen from './BadgesScreen';
import SetupScreen from './SetupScreen';
import PlacesScreen from './PlacesScreen';

const HomeScreen = TabNavigator({
	Main: { screen: BadgesScreen, icon: 'badge' },
	'Check In': { screen: PlacesScreen },
	Setup: { screen: SetupScreen },
});

export default HomeScreen;
