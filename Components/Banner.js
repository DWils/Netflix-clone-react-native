import React, { useState, useEffect } from 'react'
import axios from '../API/axios';
import requests from '../API/requests';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';



const Banner = props => {

    const [movie, setMovie] = useState([])
    const [buttonColor, setButtonColor] = useState("rgba(51,51,51,0.5)")
    const navigation = useNavigation();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending)
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
                style={styles.poster}
                source={{ uri: (`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`) }}>

                <Text style={styles.title}>{movie?.title || movie?.name || movie?.original_name}</Text>
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.5)', 'black']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 200,
                    }}
                />
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate("FilmDetail", {movie} )}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate("Lecture", {movie} )}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Lecture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity

                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Ajouter à ma liste</Text>
                    </TouchableOpacity>
                </View>


            </ImageBackground>




        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    poster: {
        width: '100%',
        height: 600,
        zIndex: 1,
        resizeMode: "cover"
    },
    title: {
        alignSelf: 'center',
        marginTop: 400,
        marginLeft: 10,
        color: "white",
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold",

    },
    buttonsContainer: {
        alignSelf: 'center',
        marginTop: 20,
        marginLeft: 10,
        flexDirection: "row",


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
