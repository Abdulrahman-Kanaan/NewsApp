import React from "react";
import { Container } from 'native-base';
import ArticlesList from "../components/ArticlesList";

export default ({ navigation }) => {

    return (
        <Container>
            <ArticlesList navigation={navigation} category={null} />
        </Container>
    );
}
