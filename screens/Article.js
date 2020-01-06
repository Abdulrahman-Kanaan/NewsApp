import React from 'react';
import { Text, View, CardItem, Card } from 'native-base';
import { StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { WebView } from 'react-native-webview'

const customImg = [
    { uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
    { uri: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { uri: "https://images.unsplash.com/photo-1444041103143-1d0586b9c0b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
    { uri: "https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" }
];

export default ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{navigation.getParam('title')}</Text>
            </View>
            <View>
                <ScrollView
                    nestedScrollEnabled={true}
                    horizontal={true}
                    pagingEnabled={true}
                >
                    {
                        customImg.map((item, key) =>
                            <View style={{ width: Dimensions.get("screen").width }} key={key}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={item} style={{ height: 200, width: null, flex: 1 }} />
                                    </CardItem>
                                </Card>
                            </View>
                        )
                    }
                </ScrollView>
            </View>
            <View style={styles.container}>
                <Text>
                    {navigation.getParam('content')}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    details: {
        padding: 3
    }
});