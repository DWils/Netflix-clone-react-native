import React, { useState, useEffect } from 'react'
import axios from '../API/axios'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import MovieList from './MovieList'



const Row = ({ title, fetchUrl, isLargeRow }) => {


    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <View style={styles.row}>
            <Text style={styles.title}>{title}</Text>
            <MovieList movies={movies}/>
        </View> 
    )
}

export default Row

const styles = StyleSheet.create({
    title: {
        color: "white",
        marginLeft: 20,
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase"

    },
    image: {
        width: 120,
        height: 180,
        margin: 5
    },
    posterWrapper: {
        flexDirection: 'row'
    }
})
