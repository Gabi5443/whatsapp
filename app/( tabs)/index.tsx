import { StyleSheet, Text, View } from "react-native"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.text}>Hello World</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text}>Hello World</Text>
            </View>
            <View style={styles.container3}>
                <Text style={styles.text}>Hello World</Text>
            </View>
            <View style={styles.container4}>
                <Text style={styles.text}>Hello World</Text>
            </View>
            <View style={styles.container5}>
                <Text style={styles.text}>Hello World</Text>
            </View>
            <View style={styles.container6}>
                <Text style={styles.text}>Hello World</Text>
            </View>
            <View style={styles.container7}>
                <Text style={styles.text}>Hello World</Text>
            </View>
            <View style={styles.container8}>
                <Text style={styles.text}>Hello World</Text>
            </View>
            <View style={styles.container9}>
                <Text style={styles.text}>Hello World</Text>
            </View>
        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'scroll',
    },

    container1: {
        width: '100%',
        height: '12%',
        backgroundColor: '#C0C0C0',
        marginTop: 5,
        borderRadius: 15,
    },

    container2: {
        width: '100%',
        height: '12%',
        backgroundColor: '#C0C0C0',
        marginTop: 5,
        borderRadius: 15,
    },

    container3: {
        width: '100%',
        height: '12%',
        backgroundColor: '#C0C0C0',
        marginTop: 5,
        borderRadius: 15,
    },

    container4: {
        width: '100%',
        height: '12%',
        backgroundColor: '#C0C0C0',
        marginTop: 5,
        borderRadius: 15,
    },

    container5: {
        width: '100%',
        height: '12%',
        backgroundColor: '#C0C0C0',
        marginTop: 5,
        borderRadius: 15,
    },

    container6: {
        width: '100%',
        height: '12%',
        backgroundColor: '#C0C0C0',
        marginTop: 5,
        borderRadius: 15,
    },

    container7: {
        width: '100%',
        height: '12%',
        backgroundColor: '#C0C0C0',
        marginTop: 5,
        borderRadius: 15,
    },

    container8: {
        width: '100%',
        height: '12%',
        backgroundColor: '#C0C0C0',
        marginTop: 5,
        borderRadius: 15,
    },

    container9: {
        width: '100%',
        height: '12%',
        backgroundColor: '#C0C0C0',
        marginTop: 5,
        borderRadius: 15,
    },

    text: {
        color: 'red',
    },
});