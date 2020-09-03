import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Video } from 'expo-av';


const Lecture = props => {

    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {

        setMovie(props.route.params.movie)

    }, []);

    return (
        <View style={{marginTop: 200}}>
            <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: "100%", height: 250 }}
            />


        </View>
    )
}

export default Lecture

const styles = StyleSheet.create({})
