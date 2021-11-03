import React, { useCallback, useState, useEffect }  from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { getSingleAnime } from '../../api/single-anime.api';

const ResultsShowScreen = ({ navigation}) => {
    const id = navigation.getParam('id');
    const [results, setResults] = useState(null);

    const keyExtractor = useCallback( item => item.id.toString(), []);
    const renderItem = useCallback( ({ item }) => {
        return (
            <View>
                <Text>{ item.attributes.titles.en }</Text>
                <Image style={styles.image} source={{ uri : item.attributes.posterImage.medium }}></Image>
            </View>
        );
    }, []);

    const getResults = async (id) => {
        const result = await getSingleAnime(id);
        setResults(result);
    };

    useEffect(() => {
        getResults(id);
    }, []);

    return (
        <View>
            <Text>
                Results Show Screen
            </Text>
            <FlatList
                data={results}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 360,
        borderRadius: 50
    }
});

export default ResultsShowScreen;