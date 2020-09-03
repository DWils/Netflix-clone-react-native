import React, { useContext } from 'react';
import Row from './Row';
import Header from './Header';
import requests from '../API/requests'
import { View, ScrollView, Animated } from 'react-native';

const Home = props => {

    return (
            <ScrollView>
                <Header />
                <View style={{ backgroundColor: "black", zIndex: 1 }}>
                    <Row
                        title="Netflix originals"
                        fetchUrl={requests.fetchNetflixOriginals}
                        isLargeRow />

                    <Row title="Nouveautés" fetchUrl={requests.fetchTrending} />
                    <Row title="Top 20" fetchUrl={requests.fetchTopRated} />
                    <Row title="Films d'Action" fetchUrl={requests.fetchTrending} />
                    <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
                    <Row title="Films d'Horreur" fetchUrl={requests.fetchHorrorMovies} />
                    <Row title="Comédies Romatiques" fetchUrl={requests.fetchRomanceMovies} />
                    <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
                </View>
            </ScrollView>

    );
}

export default Home
