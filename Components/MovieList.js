import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Movie from './Movie'

const MovieList = ({ movies }) => {

    return (
        <FlatList
            horizontal
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Movie
                    movie={item}
                />
            )}
        />
    )
}

export default MovieList
