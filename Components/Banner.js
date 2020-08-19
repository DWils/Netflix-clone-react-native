import React, { useState, useEffect } from 'react'
import axios from '../API/axios';
import requests from '../API/requests';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native'

const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return request;
        }
        fetchData();
    }, []);

    return (
        <View style={styles.banner}>
            <ImageBackground
                style={styles.image}
                source={{ uri: (`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`) }}>
                <Text style={styles.title}>{movie?.title || movie?.name || movie?.original_name}</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Lire</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Détails</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>




        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 300,
        margin: 5
    },
    title: {
        alignSelf: 'flex-start',
        marginTop: 130,
        marginLeft: 10,
        color: "white",
        fontSize: 30,
        backgroundColor: "rgba(51,51,51,0.5)",
        textTransform: "uppercase"

    },
    buttonsContainer: {
        alignSelf: 'flex-start',
        marginTop: 20,
        marginLeft: 10,
        flexDirection: "row",


    },
    button: {
        borderBottomColor: '#737373',
        borderRadius: 0.2,
        paddingVertical: 0.5,
        marginHorizontal: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 0.5,
        paddingHorizontal: 0.5,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: 'rgba(51,51,51,0.7)',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
})
