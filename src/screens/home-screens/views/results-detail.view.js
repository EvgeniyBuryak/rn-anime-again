import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
    const [averageRating, setAverageRating] = useState('');
    const [desciption, setDescription] = useState('');

    const ratingIsExist = () => {
        setAverageRating(result.attributes.averageRating ?? 'не установлено');
        setDescription(result.attributes.description ?? 'не установлено');
    };

    useEffect(()=>{
        ratingIsExist();
    }, []);

    return (
        <View style={ styles.container }>
            <Text>{ result.attributes.canonicalTitle }</Text>
            <Text>Description: { desciption }</Text>
            <Image style={ styles.image } source={{ uri: result.attributes.posterImage.tiny }}/>
            <Text>Average Rating: { averageRating }</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    image: {
        width: 150,
        height: 260,
        borderRadius: 1
    }
});

export default ResultsDetail;