import React from 'react';
import {
	TabNavigator,
} from 'react-navigation';

import BadgesScreen from './BadgesScreen';
import SetupScreen from './SetupScreen';
import CheckInScreen from './CheckInScreen';

const HomeScreen = TabNavigator({
	Main: { screen: BadgesScreen, icon: 'badge' },
	'Check In': { screen: CheckInScreen },
	Setup: { screen: SetupScreen },
});

export default HomeScreen;
