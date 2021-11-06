import React, { useState } from "react";
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

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)} 
                onTermSubmit={() => getResults(term)}
            />                        
            <ResultsList results={results} />
        </>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;