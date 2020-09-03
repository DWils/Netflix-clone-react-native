import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const baseUrl = "https:/image.tmdb.org/t/p/original/"

const Movie = ({movie}) => {

    const navigation = useNavigation();

    const displayDetailForFilm = (movie) => {
        console.log("Display film " + movie.id)
        navigation.navigate("FilmDetail", {movie} )
        console.log(movie)
    }

    return (
        <View style={styles.posterWrapper}>
            <TouchableOpacity
                onPress={() => displayDetailForFilm(movie)}
            >
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
