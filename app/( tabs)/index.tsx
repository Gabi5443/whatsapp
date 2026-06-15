import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Text style={styles.searchtext}>Pesquisar</Text>
            </View>


            <View style={styles.container1}>
                <Text>Contato</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container2}>
                <Text>Contato1</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container3}>
                <Text>Contato 2</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container4}>
                <Text>Contato 3</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container5}>
                <Text>Contato 4</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container6}>
                <Text>Contato 5</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container7}>
                <Text>Contato 6</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container8}>
                <Text>Contato 7</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container9}>
                <Text>Contato 8</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
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
    },

    container2: {
        width: '100%',
        height: '12%',
    },

    container3: {
        width: '100%',
        height: '12%',
    },

    container4: {
        width: '100%',
        height: '12%',
    },

    container5: {
        width: '100%',
        height: '12%',
    },

    container6: {
        width: '100%',
        height: '12%',
    },

    container7: {
        width: '100%',
        height: '12%',
    },

    container8: {
        width: '100%',
        height: '12%',
    },

    container9: {
        width: '100%',
        height: '12%',
    },

    mens: {
        color: 'gray',
    },

    hour: {
        textAlign: 'right',
        height: '12%',
        color: 'gray',
    },

    search: {
        width: '95%',
        height: '3%',
        backgroundColor: '#C0C0C0',
        display: 'flex',
        alignSelf: 'center',
        borderRadius: 20,
        margin: 10,
    },

    searchtext: {
        marginLeft: 10,
    },
});