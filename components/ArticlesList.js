import React, { useState, Component } from "react";
import { FlatList, TouchableOpacity, View, StyleSheet } from "react-native";
import { Card, CardItem, Text, Body, Container, Spinner } from 'native-base';
import {config} from '../config';
export default class ArticlesList extends Component {

    state = {
        articles: [],
        isLoading: false,
        url: config.network + '/api/articles?page=1',
        endOfData: false
    }

    componentDidMount() {
        if (this.props.category != null) {
            this.setState({
                url: this.state.url.concat('&category=' + this.props.category.id)
            }, this.loadMore);
        } else {
            this.loadMore();
        }
    }

    loadMore = async () => {
        console.log(this.state.url);
        if (this.state.url != null) {
            this.setState({
                isLoading: true
            });
            fetch(this.state.url)
                .then((response) => response.json())
                .then((jsonResponse) => {
                    this.setState({
                        articles: this.state.articles.concat(jsonResponse.data),
                        url: jsonResponse.next_page_url,
                        isLoading: false
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            this.setState({
                endOfData: true
            });
        }
    }

    renderFooter = () => {
        if (!this.state.endOfData) {
            if (this.state.isLoading) {
                return (
                    <View>
                        <Spinner />
                    </View>
                );
            } else {
                return null;
            }
        } else {
            return (
                <View>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={styles.endOfData}>No More Data To Show!</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            );
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Article', item)}>
                <Card>
                    <CardItem header>
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{item.content.length > 50 ? item.content.slice(0, 50) + '...' : item.content}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <Container>
                <FlatList
                    data={this.state.articles}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={1}
                    ListFooterComponent={this.renderFooter}
                />
            </Container>
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
    }
});