import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, Platform } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'
import { useNavigation } from '@react-navigation/native';

const FilmDetail = props => {

    const [film, setFilm] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigation = useNavigation();

    useEffect(() => {

        setFilm(props.route.params.movie)
        setIsLoading(false)

    }, []);

    const displayLoading = () => {
        if (isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    const displayFilm = () => {
        if (film != []) {
            return (
                <ScrollView style={styles.scrollview_container}>
                    <Image
                        style={styles.image}
                        source={{ uri: getImageFromApi(film.backdrop_path) }}
                    />
                    <TouchableOpacity
                        onPress={()=> navigation.navigate("Lecture", {film} )}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Lecture</Text>
                    </TouchableOpacity>
                    <Text style={styles.title_text}>{film.title || film.name || film.original_name}</Text>
                    <Text style={styles.default_text}>Sorti le {moment(new Date(film.release_date || film.first_air_date)).format('DD/MM/YYYY')}</Text>
                    <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
                    {/* <Text style={styles.default_text}>Genre(s) : {film.genres.map(function (genre) {
                        return genre.name;
                    }).join(" / ")}
                    </Text> */}
                    {/* <Text style={styles.default_text}>Produit par : {film.production_companies.map(function (company) {
                        return company.name;
                    }).join(" / ")}
                    </Text> */}
                    <Text style={styles.description_text}>{film.overview}</Text>

                </ScrollView>
            )
        }
    }


    return (
        <View style={styles.main_container}>
            {isLoading ? displayLoading() : displayFilm()}

        </View>

    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        color: "green",
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_container: {
        flex: 1
    },
    image: {
        height: 169,
        margin: 5
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 10,
        marginTop: 15,
        fontSize: 30
    },
    default_text: {
        marginHorizontal: 10,
        marginTop: 5,
        fontSize: 20
    },
    favorite_container: {
        alignItems: 'center',
    },

    favorite_image: {
        width: 40,
        height: 40
    },
    share_touchable_floatingactionbutton: {
        position: 'absolute',
        width: 60,
        height: 60,
        right: 30,
        bottom: 30,
        borderRadius: 30,
        backgroundColor: '#e91e63',
        justifyContent: 'center',
        alignItems: 'center'
    },
    share_image: {
        width: 30,
        height: 30
    },
    button: {

        borderRadius: 0.2,
        paddingVertical: 0.5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 3,
        paddingHorizontal: 7,
        textAlign: 'center',
        backgroundColor: 'rgba(51,51,51,0.7)',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },


})

export default FilmDetail