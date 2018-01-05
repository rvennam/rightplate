import React from 'react';
import {View, ScrollView, Image, TextInput, Keyboard } from 'react-native';
import {Button, Icon, Card, Text, Slider, FormLabel, FormInput} from 'react-native-elements';
import { getStaticMapURI, checkIn }  from '../services.js';

class CheckInScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Check In',
	});
	constructor(props) {
		super(props);
		this.state = {
			plateName: '',
			rating: '0'
		};
		this.onCheckInPlace = this.onCheckInPlace.bind(this);
	}
	onCheckInPlace(badge) {
		Keyboard.dismiss;
		if(this.state.plateName == '') return;
		badge.plate = {
			plateName: this.state.plateName,
			rating: this.state.rating
		};
		checkIn(badge).then(this.props.navigation.navigate('Badges', {refresh: true}));
	}

	render() {
		const {badge} = this.props.navigation.state.params;
		const {lat, lon} = badge.geometry.location;
		const mapurl = getStaticMapURI(lat, lon);
		return (
			<ScrollView style={styles.container} keyboardShouldPersistTaps="never">
				<FormLabel>What did you get?</FormLabel>
				<TextInput
					style={{height: 40}}
					placeholder="Cauliflower Taco"
					value={this.state.plateName}
					onChangeText={(plateName) => this.setState({plateName})}
				/>
				<FormLabel>Rating: {this.state.rating}</FormLabel>
				<Slider
					rating={this.state.rating}
					step={1}
					minimumValue={0}
					maximumValue={5}
					style={{paddingLeft: 20}}
					onValueChange={(rating) => this.setState({rating})} />
				<Button
					onPress={() => this.onCheckInPlace(badge)}
					icon={{name: 'code'}}
					backgroundColor='#03A9F4'
					disabled={this.state.plateName==''? true: false}
					buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
					title='CHECK IN' />
			</ScrollView>

		);
	}
}

const styles = {
	container: {
	  flex: 1,
	  padding: 20,
	  backgroundColor: '#fff',
	},
  };

export default CheckInScreen;