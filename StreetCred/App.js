import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import {
  Button,
  Header,
  SocialIcon,
  Avatar,
} from 'react-native-elements';
import HomeScreen from './Views/HomeScreen';
import Login from './Views/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      loggedIn: false,
      user: {
        firstname: 'First',
        lastname: 'Last',
        avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y',
      },
    };
    this.logIn = this.logIn.bind(this);
    // this.setTimeout = this.setTimeout.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.logIn(), 4000);
  }

  logIn() {
    return fetch('https://openwhisk.ng.bluemix.net/api/v1/web/rvennam@us.ibm.com_streetcred/streetcred/GetUser?userID=0')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({ loggedIn: true, user: responseJson });
      }).catch((error) => {
        console.error(error);
      });
  }

  renderHeaderIcon() {
    return (<Image
      source={require('./images/logo-light.png')}
      style={{ height: 30, width: 120 }}
      resizeMode="contain"
    />);
  }

  renderAvatar() {
    return (<Avatar
      small
      rounded
      source={{ uri: this.state.user.avatar }}
      onPress={() => console.log('Works!')}
      activeOpacity={0.7}
    />);
  }
  render() {
    const SCREEN_WIDTH = Dimensions.get('window').width;
    return (
      <View style={styles.container}>
        <View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={this.renderHeaderIcon()}
            rightComponent={this.renderAvatar()}
          />
        </View>
        { this.state.error !== '' && <Text>{this.state.error}</Text> }
        {!this.state.loggedIn ?
          <Login style={styles.content} logIn={this.logIn} />
        :
          <HomeScreen />
        }
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logo: {
    width: Dimensions.get('window').width * 0.60,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
