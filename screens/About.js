import React from "react";
import { Container, Text } from 'native-base';
import { StyleSheet } from "react-native";

export default ({ navigation }) => {

    return (
        <Container>
            <Text style={styles.text}>
                News Application{'\n'}
                Made By: Abdulrahman Kanaan{'\n'}
                Version: 1.0
            </Text>
        </Container>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 10
    }
});