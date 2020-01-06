import React, { useState, Component } from "react";
import { FlatList, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { ListItem } from "native-base";

export default class Categories extends Component {

    state = {
        categories: []
    }

    componentDidMount = () => {
        fetch('http://192.168.1.2:8080/api/categories')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    categories: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderItem = ({ item, index }) => {
        return (
            <React.Fragment>
                <ListItem itemDivider style={styles.itemDivider}>
                    <Text>{item.key}</Text>
                </ListItem>
                <FlatList
                    data={item.data}
                    renderItem={({ item }) => {
                        return (
                            <ListItem>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Articles', { category: item })}>
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            </ListItem>
                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </React.Fragment>
        );
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.categories}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    endOfData: {
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemDivider: {
        backgroundColor: '#ccc'
    }
});