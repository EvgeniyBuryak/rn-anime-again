import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { getListAnime } from "../../api/anime.api";
import ResultsList from "./views/results-list.view";
import SearchBar from "./views/search-bar.view";

const HomeScreen = () => {
    const [results, setResults] = useState(null);  
    const [term , setTerm] = useState('');  

    const getResults = (searchTerm) => {
        const response = new Promise((resolve, reject) => {
            const result = getListAnime(searchTerm);
            
            resolve(result);
            reject(new Error("Ошибка"));
        });

        response.then( res => setResults(res))
        .catch((err) => console.log('Ошибка'));
    };

    useEffect(()=>{
        getResults(term);
    }, [term]);

    return (
        <View style={ styles.container }>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)} 
                onTermSubmit={() => console.log('Term was submitted')}
            />
            <Text>{term}</Text>
            <Text>Results length: {console.log(results.length)}</Text>
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