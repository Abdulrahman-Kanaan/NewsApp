import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Header from '../components/Header';
import Article from '../screens/Article';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Home' navigation={navigation} />
            }
        }
    },
    Article: {
        screen: Article,
        navigationOptions: {
            title: 'Article'
        }
    }
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        title: "Home"
    }
});

export default HomeStack;