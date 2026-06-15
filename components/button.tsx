import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function button() {
    return (
        <TouchableOpacity>
            <Text style={styles.button}>Todas</Text>
        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    button: {
        width: 12,
        height: 12,
        backgroundColor: 'red',
    }

})