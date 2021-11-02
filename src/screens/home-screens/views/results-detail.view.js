import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
    return (
        <View style={ styles.container }>
            <Text> { result.attributes.titles.en } </Text>
            <Image style={ styles.image } source={{ uri: result.attributes.posterImage.tiny }} />
            <Text> Average Rating: { result.attributes.averageRating }</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    image: {
        width: 250,
        height: 360,
        borderRadius: 1
    }
});

export default ResultsDetail;