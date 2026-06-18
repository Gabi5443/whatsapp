import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Text style={styles.searchtext}>Pesquisar</Text>
            </View>


            <View style={styles.container1}>
                <Image style={styles.imagem} source={ require('../../assets/fotoperfil.png') }/>
                <Text style={styles.name}>Contato</Text>
                
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.name}>Contato1</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container3}>
                <Text style={styles.name}>Contato 2</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container4}>
                <Text style={styles.name}>Contato 3</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container5}>
                <Text style={styles.name}>Contato 4</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container6}>
                <Text style={styles.name}>Contato 5</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container7}>
                <Text style={styles.name}>Contato 6</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container8}>
                <Text style={styles.name}>Contato 7</Text>
                <Text style={styles.mens}>Mensagem...</Text>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container9}>
                <Text style={styles.name}>Contato 8</Text>
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

    imagem: {
        flex: 1,
        width: 40,
        height: 40,
    },

    name: {
        color: 'white',
        marginLeft: 50,
    },

    container1: {
        width: '100%',
        height: '12%',
        backgroundColor: 'black',
    },

    container2: {
        width: '100%',
        height: '12%',
        backgroundColor: 'black',
    },

    container3: {
        width: '100%',
        height: '12%',
        backgroundColor: 'black',
    },

    container4: {
        width: '100%',
        height: '12%',
        backgroundColor: 'black',
    },

    container5: {
        width: '100%',
        height: '12%',
        backgroundColor: 'black',
    },

    container6: {
        width: '100%',
        height: '12%',
        backgroundColor: 'black',
    },

    container7: {
        width: '100%',
        height: '12%',
        backgroundColor: 'black',
    },

    container8: {
        width: '100%',
        height: '12%',
        backgroundColor: 'black',
    },

    container9: {
        width: '100%',
        height: '12%',
        backgroundColor: 'black',
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