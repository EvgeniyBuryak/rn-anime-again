import React, { useCallback } from 'react';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './results-detail.view';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ results, navigation }) => {

    const keyExtractor = useCallback( item => item.id.toString(), []);
    const renderItem = useCallback( ({item}) => {        
        return (            
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                <ResultsDetail result={item}/>
            </TouchableOpacity>
        )}, []);

    return (
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={results}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </>
    );
};

export default withNavigation(ResultsList);