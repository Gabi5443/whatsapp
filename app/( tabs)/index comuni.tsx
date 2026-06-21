import { Image, StyleSheet, Text, View } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

export default function Index() {
    return (
        <View style={styles.all}>

            <View style={styles.topIcons}>
                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <View style={styles.circle}>
                        <Text><Feather name="camera" size={20} color="white" /></Text>
                    </View>
                    <View style={[styles.circle, { backgroundColor: '#37c957' }]}>
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>+</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.titulo}>Comunidades</Text>

            <View style={styles.containerNewComuni}>
                <View style={styles.boxImagemNewComuni}>
                    <Image style={styles.imagemNewComuni} source={require('../../assets/comunidade foto.png')} />
                    <View style={[styles.circleImagemNewComuni, { backgroundColor: '#37c957' }]}>
                        <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold' }}>+</Text>
                    </View>
                </View>
                <View style={styles.boxNewComuni}>
                    <Text style={styles.nameNewComuni}>Nova comunidade</Text>
                </View>
            </View>

            <View style={styles.containerNameComuni}>
                <Image style={styles.imagemComuni} source={require('../../assets/comunidade foto.png')} />
                <View style={styles.boxComuni}>
                    <Text style={styles.nameComuni}>Comunidade de Contato 3</Text>
                </View>
            </View>
            <View style={styles.containerAvisoComuni}>
                <Text style={styles.iconAviso}> <Entypo name="megaphone" size={24} color="green" /> </Text>
                <View style={styles.boxAvisoComuni}>
                    <Text style={styles.nameComuni}> Avisos</Text>
                    <Text style={{color: '#8e8e93'}}> Mensagem...</Text>
                </View>
                <Text style={styles.whenComuni}> Ontem </Text>
            </View>
            <View style={styles.moreComuni}>
                <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
                <Text style={{color: '#8e8e93'}}>Ver todos</Text>
            </View>

            <View style={styles.containerNameComuni1}>
                <Image style={styles.imagemComuni} source={require('../../assets/comunidade foto.png')} />
                <View style={styles.boxComuni}>
                    <Text style={styles.nameComuni}>Comunidade de Contato 5</Text>
                </View>
            </View>
            <View style={styles.containerAvisoComuni}>
                <Text style={styles.iconAviso}> <Entypo name="megaphone" size={24} color="green" /> </Text>
                <View style={styles.boxAvisoComuni}>
                    <Text style={styles.nameComuni}> Avisos</Text>
                    <Text style={{color: '#8e8e93'}}> Mensagem...</Text>
                </View>
                <Text style={styles.whenComuni}> 02/06/2026 </Text>
            </View>
            <View style={styles.moreComuni}>
                <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
                <Text style={{color: '#8e8e93'}}>Ver todos</Text>
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
        justifyContent: 'flex-end',
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

    //TITULO
    titulo: {
        color: '#ffffff',
        fontSize: 34,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },

    //CRIAR NOVA COMUNIDADE

    containerNewComuni: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#2c2c2e',
    },

    boxImagemNewComuni: {
        position: 'relative',
        width: 62,
        height: 50,
    },

    imagemNewComuni: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        borderRadius: 15,
        marginRight: 15,
        marginLeft: 12,
    },

    circleImagemNewComuni: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -2,
        right: 2,
        borderWidth: 2,
    },

    boxNewComuni: {
        flex: 1,
        justifyContent: 'center',
    },

    nameNewComuni: {
        color: '#e9edef',
        fontWeight: 'bold',
        marginBottom: 4,
    },

    //COMUNIDADES

    containerNameComuni: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    imagemComuni: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        borderRadius: 15,
        marginRight: 15,
        marginLeft: 12,
    },

    boxComuni: {
        flex: 1,
        justifyContent: 'center',
    },

    nameComuni: {
        color: '#e9edef',
        fontWeight: 'bold',
        marginBottom: 4,
    },

    whenComuni: {
        color: '#8e8e93',
        alignSelf: 'flex-start',
        marginTop: 20,
    },

    //AVISOS

    containerAvisoComuni: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        gap: 7,
    },

    iconAviso: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#37c957',
        alignContent: 'center',
    },

    boxAvisoComuni: {
        flex: 1,
        justifyContent: 'center',
    },

    //VER MAIS

    moreComuni: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 10,
        gap: 30,
        borderBottomWidth: 5,
        borderBottomColor: '#2c2c2e',

    },

    containerNameComuni1: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    


});