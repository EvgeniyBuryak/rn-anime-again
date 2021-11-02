import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ResultsDetail from './results-detail.view';

const ResultsList = ({ results }) => {

    const keyExtractor = useCallback( item => item.id.toString(), []);
    const renderItem = useCallback( ({item}) => {        
        return (
            <View>                
                <ResultsDetail result={item}/>
            </View>
        );
    }, []);

    return (
        <View>
            <FlatList
                data={results}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default ResultsList;