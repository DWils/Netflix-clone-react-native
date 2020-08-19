import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Row from './Components/Row';
import Banner from './Components/Banner';
import requests from './API/requests'
import { View, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={{ backgroundColor:"black" }}>
      <Banner/>
      <Row
        title="Netflix originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />

      <Row title="Nouveautés" fetchUrl={requests.fetchTrending} />
      <Row title="Top 20" fetchUrl={requests.fetchTopRated} />
      <Row title="Films d'Action" fetchUrl={requests.fetchTrending} />
      <Row title="Comédie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Films d'Horreur" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedie Romatiques" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
    </View>
  );
}
