import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon, List} from 'react-native-elements';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addBadgesAction} from '../actions';
import {getBadges, getPlaces} from '../services.js';

class PlacesScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			placesList: []
		};
		this.fetchData = this.fetchData.bind(this);
	}

static navigationOptions = {
	tabBarLabel: 'Check In',
	tabBarIcon: ({ tintColor }) => (
		<Icon
			type='simple-line-icon'
			name='check' />
	),
};

fetchData(position) {
	getPlaces(position).then((responseJson) => {
		Array.isArray(responseJson) && this.setState({placesList: responseJson});
	});
}

componentDidMount() {
	navigator.geolocation.getCurrentPosition((position)=>this.fetchData(position));
}


onSelectPlace(badge) {
	this.props.navigation.navigate('Detail', {badge});
}

render() {
	return (
		<ScrollView>
			<View style={styles.hero}>
				<Icon color="white" name="near-me" size={62} type="material" />
				<Text style={styles.heading}>Nearby</Text>
			</View>
			{this.state.placesList.map((badge, i) =>
				<ListItem key={i}
					roundAvatar
					title={badge.name}
					onPress={() => this.onSelectPlace(badge)}
					imageProps={{resizeMode : 'contain'}}
					avatar={{ uri: badge.icon }}
				>
					<Text style={{ marginBottom: 10 }}>

					</Text>
				</ListItem>
			)}
		</ScrollView>

	);
}
}

const styles = StyleSheet.create({
	heading: {
		marginTop: 10,
		fontSize: 22,
	},
	hero: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 40,
		backgroundColor: '#dcd7d4',
	},
});

PlacesScreen.propTypes = {
	navigation: PropTypes.object
};

const mapStateToProps = state => {
	return {badges: state.badges};
};

const mapDispatchToProps = dispatch => {
	return {
		refreshBadges : () => {
			getBadges().then(badges => dispatch(addBadgesAction(badges)));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);