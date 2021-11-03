import React, { useCallback } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
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
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={results}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>
    );
};

export default withNavigation(ResultsList);