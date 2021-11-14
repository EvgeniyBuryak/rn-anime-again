import React, { useState, useCallback } from "react";
import { StyleSheet } from 'react-native';
import { useEffect } from "react/cjs/react.development";
import { getListAnime } from "../../api/anime.api";
import ResultsList from "./views/results-list.view";
import SearchBar from "./views/search-bar.view";

const HomeScreen = () => {
    const [results, setResults] = useState(null);  
    const [term , setTerm] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    const getResults = async (searchTerm = "space") => {
        setRefreshing(true);
    
        try {
            const res = await getListAnime(searchTerm);
                                
            setResults(res);            
        } catch {
            console.log('Ошибка');
        }
        finally {
            setRefreshing(false);
        }
    };

    const handleRefresh = useCallback(() => {        
        //console.log(term);
        getResults(term);
    },[term]);

    //оптимизировать
    const handleTermChange = useCallback((newTerm) => {
        //console.log(newTerm);
        setTerm(newTerm)        
    },[]);

    const handleTermSubmit = useCallback(()=>{
        getResults(term);
    },[term]);
    // Шпоры - хуки аналоги жизненого цикла
    // DidMount
    // WillMount
    useEffect(()=>{
        getResults();
    },[]);
    //textInput onClear, onBlure - вызывается при очистке поля
    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={handleTermChange} 
                onTermSubmit={handleTermSubmit}
            />
            <ResultsList results={results} onRefresh={handleRefresh} refreshing={refreshing}/>
        </>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;