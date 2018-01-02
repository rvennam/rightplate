import React from 'react';
import {View, Image } from 'react-native';
import {Button, Icon, Card, Text} from 'react-native-elements';
import { getStaticMapURI, checkIn }  from '../services.js';

class PlaceDetailScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.badge.name,
	});
	render() {
		const {badge} = this.props.navigation.state.params;
		console.log(badge);
		const {lat, lon} = badge.geometry.location;
		const mapurl = getStaticMapURI(lat, lon);
		console.log('mapurl', mapurl);
		return (
			<View style={{padding: 20}}>
				<Image
					source={{ uri: mapurl }} 
					style={{height: 200}}
					resizeMode='contain'
				/>
					
				<Text style={{marginBottom: 10}}>
					{badge.vicinity}
				</Text>
				<Button
					icon={{name: 'code'}}
					backgroundColor='#03A9F4'
					buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
					title='CHECK IN' />
			</View>

		);
	}
}

export default PlaceDetailScreen;