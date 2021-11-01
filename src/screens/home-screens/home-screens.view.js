import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getListAnime } from "../../api/anime.api";

const HomeScreen = () => {
    const [results, setResults] = useState(null);

    const keyExtractor = useCallback( item => item.id.toString(), []);
    const renderItem = useCallback( ({item}) => {
        
        return <Text> {item.attributes.titles.en} </Text>
    }, []);

    const getResults = () => {
        const response = new Promise((resolve, reject) => {
            const result = getListAnime();

            resolve(result);
            reject(new Error("Ошибка"));
        });

        response.then( res => setResults(res))
        .catch((err) => console.log('Ошибка'));
    };

    useEffect(()=>{
        getResults();
    }, []);

    return (
        <View>
            <Text>
                Home Screen
            </Text>
            <FlatList
                data={results}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create();

export default HomeScreen;