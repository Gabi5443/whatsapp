import { StyleSheet, Text, View } from "react-native"

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
        </View>
    )
}

const styles = StyleSheet. create ({
    container: {
        

    },

    text: {
        color: 'red', 
    }
})