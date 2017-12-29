import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	ScrollView,
	RefreshControl
} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {addBadgesAction} from '../actions';
import {getBadges} from '../services.js';


class Badges extends React.Component {
	constructor(props) {
		super(props);
		console.log(props.badges);
		this.state = {
			refreshing: false
		};
		this.fetchData = this
			.fetchData
			.bind(this);
		this._onRefresh = this
			._onRefresh
			.bind(this);
		getBadges().then(r => props.dispatch(addBadgesAction(r)));
	}

static navigationOptions = {
	title: 'Badges',
	tabBarIcon: ({tintColor}) => (<Icon type='simple-line-icon' name='badge'/>)
};

_onRefresh() {
	this.setState({refreshing: true});
	this
		.fetchData()
		.then(() => {
			this.setState({refreshing: false});
		});
}

fetchData() {
	return fetch('https://openwhisk.ng.bluemix.net/api/v1/web/rvennam@us.ibm.com_streetcred/' +
'streetcred/GetUserBadges?userID=0')
		.then(response => response.json())
		.then((responseJson) => {
			this.props.dispatch(addBadgesAction(responseJson));
		})
		.catch((error) => {
			console.error(error);
		});
}

// componentDidMount() {
// 	return this.fetchData();
// }

componentWillReceiveProps() {
	console.log('componentWillReceiveProps?');
}

render() {
	return (
		<ScrollView
			refreshControl={< RefreshControl refreshing = {
				this.state.refreshing
			}
			onRefresh = {
				this._onRefresh
			} />}>
			<View style={styles.hero}>
				<Icon color="white" name="whatshot" size={62} type="material"/>
				<Text style={styles.heading}>Your Badges</Text>
			</View>
			{this
				.props
				.badges
				.map((badge, i) => <Card
					key={i}
					title={`You earned the ${badge.name} badge`}
					image={{
						uri: 'https://cdn.pixabay.com/photo/2017/11/22/10/51/asian-2970211_1280.jpg'
					}}></Card>)
			}
		</ScrollView>
	);
}
}

const styles = StyleSheet.create({
	heading: {
		marginTop: 10,
		fontSize: 22
	},
	hero: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 40,
		backgroundColor: '#dcd7d4'
	}
});

const mapStateToProps = state => {
	console.log('Got new state', state);
	console.log('--');
	return {
		badges: state.badges
	};
};



export default connect(mapStateToProps)(Badges);
// export default connect()(Badges);