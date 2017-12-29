import React from 'react';
import {
	Button, Icon
} from 'react-native-elements';

class SetupScreen extends React.Component {
    static navigationOptions = {
   	tabBarLabel: 'Setup',
  	tabBarIcon: ({ tintColor }) => (
    		<Icon
    			type='simple-line-icon'
    			name='settings' />
    	),
    };
    render() {
    	const { goBack } = this.props.navigation;
    	return (
    		<Button
    			title="Go back to home tab"
    			onPress={() => goBack()}
    		/>
    	);
    }
}

export default SetupScreen;