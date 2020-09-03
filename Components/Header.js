import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Nav from './Nav'
import Banner from './Banner'


const Header = props => {

    return (
        <View style={styles.banner}>
            <Nav/>
            <Banner />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    banner:{
        
    }
})
