import { Image, StyleSheet, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Index() {
    return (
        <View style={styles.all}>

            <View style={styles.topIcons}>
                <View style={styles.circle}>
                    <Feather name="search" size={17} color="white" />
                </View>

                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <View style={styles.circle}>
                        <Ionicons name="qr-code-outline" size={20} color="white" />
                    </View>
                    <View style={styles.circle}>
                        <Ionicons name="pencil" size={20} color="white" />
                    </View>
                </View>
            </View>

            <View style={styles.contImgPerfil}>
                <Image style={styles.imagem} source={require('../../assets/fotoperfil.png')} />
            </View>

            <View style={styles.container1}>
                <View style={styles.contText1}>

                    <Text style={[{ borderBottomWidth: 0.3, borderBottomColor: '#2c2c2e',}]}> Listas </Text>
                    <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
                </View>
                <View style={styles.contText2}>

                    <Text style={[ { borderBottomWidth: 0.3, borderBottomColor: '#2c2c2e',}]}>Favoritas </Text>
                    <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
                </View>
                <View style={styles.contText3}>

                    <Text style={[ { borderBottomWidth: 0.3, borderBottomColor: '#2c2c2e',}]}>Mensagens de transmissão </Text>
                    <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
                </View>
                <View style={styles.contText4}>

                    <Text>Dispositivos conectados </Text>
                    <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
                </View>
                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    all: {
        flex: 1,
        overflow: 'scroll',
        backgroundColor: 'black',
    },

    //ICONES

    topIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 20,
    },

    circle: {
        width: 35,
        height: 35,
        borderRadius: 18,
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //FOTO PERFIL

    contImgPerfil: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imagem: {
        width: 150,
        height: 150,
        borderRadius: 70,
    },

    //PARTE 1

    container1: {
        marginHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#1c1c1e',
    },

    contText1: {
        color: 'white',
        paddingVertical: 10,
        marginLeft: 10,
    },

    contText2: {
        color: 'white',
        paddingVertical: 10,
        marginLeft: 10,
    },

    contText3: {
        color: 'white',
        paddingVertical: 10,
        marginLeft: 10,
    },

    contText4: {
        color: 'white',
        paddingVertical: 10,
        marginLeft: 10,
    },



});