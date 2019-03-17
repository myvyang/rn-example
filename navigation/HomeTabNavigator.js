import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Platform, ScrollView, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

class Tab1 extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Button
                    style={{backgroundColor:'#3dd'}}
                    title={'Youtube'}
                    onPress={()=> {
                        this.props.navigation.navigate('Youtube')
                    }}
                />
            </View>
        )
    }
}

class Tab2 extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Button
                    style={{backgroundColor:'#3dd'}}
                    title={'另一个Screen'}
                    onPress={()=> {
                        this.props.navigation.navigate('FontScreen')
                    }}
                />
            </View>
        )
    }
}

const Home = createBottomTabNavigator(
  {
    Tab1: Tab1,
    Tab2: Tab2,
});

export default Home;