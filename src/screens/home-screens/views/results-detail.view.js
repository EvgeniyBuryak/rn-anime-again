import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, Image } from "react-native";

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
        <ScrollView style={ styles.container }>
            <Text style={styles.title}>{ result.attributes.canonicalTitle }</Text>
            <Image style={styles.image} source={{ uri: result.attributes.posterImage.tiny }}/>
            <Text style={styles.description}>Description: { desciption.substring(0, 150) }</Text>
            <Text style={styles.rating}>Average Rating: { averageRating }</Text>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontWeight: 'bold',
    },
    rating: {
        marginVertical: 5
    },
    container: {
        marginTop: 15,
        marginLeft: 15,
        
    },
    image: {
        width: 150,
        height: 260,
        marginVertical: 5,
        borderRadius: 5,
    }
});

export default ResultsDetail;