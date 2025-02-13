import React from 'react';
import {View, TextInput, StyleSheet } from 'react-native';


const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Ara..." onChangeText={props.onSearch}/>
        </View>
    )
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        padding:8,
        margin:5,
        borderRadius:5
    }
})