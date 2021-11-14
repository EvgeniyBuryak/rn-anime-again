import React, { useCallback } from 'react';
import { FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import ResultsDetail from './results-detail.view';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ results, navigation, onRefresh, refreshing }) => {
    

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
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </>
    );
};

export default withNavigation(ResultsList);