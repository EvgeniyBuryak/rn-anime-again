import React, { useState, useEffect } from "react";
import { View, StyleSheet } from 'react-native';
import { getListAnime } from "../../api/anime.api";
import ResultsList from "./views/results-list.view";
import SearchBar from "./views/search-bar.view";

const HomeScreen = () => {
    const [results, setResults] = useState(null);    

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
        <View style={ styles.container }>
            <SearchBar />
            <ResultsList results={results} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    }
});

export default HomeScreen;