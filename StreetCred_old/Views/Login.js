import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import {
    Button,
    Header,
    SocialIcon
} from 'react-native-elements';

class Login extends React.Component {

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                flexDirection: 'column',
                justifyContent: 'space-between',
            },
            logo: {
                width: Dimensions.get('window').width * .60,
                marginLeft: "auto",
                marginRight: "auto",
            },
        });
        return (
        <View>
            <Image
                source={require('../images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <SocialIcon title="Sign In With Facebook"
                button
                fontWeight="400"
                type="facebook"
                    onPress={() => this.props.logIn()}
            />
        </View>
        );
    };
}


export default Login;