import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Nav = () => {
    return (
        <View style={styles.nav}>
            <Image
                style={styles.image}
                source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/120px-Logo_Netflix.png"}}
            />
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
        backgroundColor: "#171717",
        height: 100,
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    image: {
        width: 100,
        height: 25,
        marginLeft: 140,
        marginTop: 40
    },
    avatarImage: {
        width: 30,
        height: 30,
        marginTop: 35

    }
})
