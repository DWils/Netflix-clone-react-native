import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const Nav = () => {
    return (
        <View style={styles.nav}>
            <Image
                style={styles.NetflixLogo}
                source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/120px-Logo_Netflix.png"}}
            />

            <Text style={styles.navBtn}>Séries</Text>

            <Text style={styles.navBtn}>Films</Text>

            <Image
                style={styles.avatarImage}
                source={{uri: "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"}}
            />
        </View>
    )
}

export default Nav

const styles = StyleSheet.create({
    nav: {
        height: 100,
        paddingTop: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        zIndex: 2,
        position:"absolute"
    },

    navBtn: {
        marginHorizontal: 25,
        color: "white",
        marginTop: 40,
        fontSize: 20
    },

    NetflixLogo: {
        width: 100,
        height: 25,
        marginHorizontal: 20,
        marginTop: 40
    },
    avatarImage: {
        width: 30,
        height: 30,
        marginTop: 35,
        marginHorizontal: 20

    }
})
