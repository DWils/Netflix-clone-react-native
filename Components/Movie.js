import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'

const baseUrl = "https:/image.tmdb.org/t/p/original/"

const Movie = ({ movie }) => {
    return (
        <View style={styles.posterWrapper}>
            <TouchableOpacity>
                <Image
                    style={styles.image}
                    source={{ uri: `${baseUrl}${movie.poster_path}` }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Movie

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 180,
        margin: 5
    },
})
