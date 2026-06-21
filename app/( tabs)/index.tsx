import { Image, StyleSheet, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default function Index() {
    return (
        <View style={styles.all}>

            <View style={styles.topIcons}>
                <View style={styles.circle}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>···</Text>
                </View>

                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <View style={styles.circle}>
                        <Text><Feather name="camera" size={20} color="white" /></Text>
                    </View>
                    <View style={[styles.circle, { backgroundColor: '#37c957' }]}>
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold'}}>+</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.titulo}>Conversas</Text>

            <View style={styles.searchcont}>
                <View style={styles.searchbar}>
                    <Feather name="search" size={17} color="#8e8e93" />
                    <Text style={styles.searchtext}> Pesquisar</Text>
                </View>
            </View>

            <View style={styles.filtroContainer}>
                <View style={[styles.filtroBox, styles.filtroAtivo]}>
                    <Text style={styles.filtroTextAtivo}>Todas</Text>
                </View>
                <View style={styles.filtroBox}>
                    <Text style={styles.filtroText}>Não lidas</Text>
                </View>
                <View style={styles.filtroBox}>
                    <Text style={styles.filtroText}>Favoritos</Text>
                </View>
                <View style={styles.filtroBox}>
                    <Text style={styles.filtroText}>Grupos</Text>
                </View>
                <View style={styles.filtroBox}>
                    <Text style={styles.filtroText}>+</Text>
                </View>
            </View>

            <View style={styles.container1}>
                <Image style={styles.imagem} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.box}>
                    <Text style={styles.name}>Contato</Text>
                    <Text style={styles.mens}>Mensagem...</Text>
                </View>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container2}>
                <Image style={styles.imagem} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.box}>
                    <Text style={styles.name}>Contato1</Text>
                    <Text style={styles.mens}>Mensagem...</Text>
                </View>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container3}>
                <Image style={styles.imagem} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.box}>
                    <Text style={styles.name}>Contato 2</Text>
                    <Text style={styles.mens}>Mensagem...</Text>
                </View>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container4}>
                <Image style={styles.imagem} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.box}>
                    <Text style={styles.name}>Contato 3</Text>
                    <Text style={styles.mens}>Mensagem...</Text>
                </View>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container5}>
                <Image style={styles.imagem} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.box}>
                    <Text style={styles.name}>Contato 4</Text>
                    <Text style={styles.mens}>Mensagem...</Text>
                </View>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container6}>
                <Image style={styles.imagem} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.box}>
                    <Text style={styles.name}>Contato 5</Text>
                    <Text style={styles.mens}>Mensagem...</Text>
                </View>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container7}>
                <Image style={styles.imagem} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.box}>
                    <Text style={styles.name}>Contato 6</Text>
                    <Text style={styles.mens}>Mensagem...</Text>
                </View>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container8}>
                <Image style={styles.imagem} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.box}>
                    <Text style={styles.name}>Contato 7</Text>
                    <Text style={styles.mens}>Mensagem...</Text>
                </View>
                <Text style={styles.hour}> 12:34 </Text>
            </View>
            <View style={styles.container9}>
                <Image style={styles.imagem} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.box}>
                    <Text style={styles.name}>Contato 8</Text>
                    <Text style={styles.mens}>Mensagem...</Text>
                </View>
                <Text style={styles.hour}> 12:34 </Text>
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

    //TITULO

    titulo: {
        color: '#ffffff',
        fontSize: 34,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingTop: 16,
    },

    //BARRA DE PESQUISA

    searchcont: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    searchbar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1c1c1e',
        width: '100%',
        height: 38,
        borderRadius: 10,
        paddingHorizontal: 12,
    },

    searchtext: {
        color: '#8e8e93',
        fontSize: 15,
    },

    //BARRA DE FILTROS

    filtroContainer: {
        overflow: 'scroll',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 6,
    },
    filtroBox: {
        backgroundColor: '#1c1c1e',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 10,
        justifyContent: 'center',
    },
    filtroAtivo: {
        backgroundColor: '#0a321f', 
    },
    filtroTextAtivo: {
        color: '#00a884',   
        fontWeight: '600',
        fontSize: 14,
    },
    filtroText: {
        color: '#8e8e93',
        fontWeight: '600',
        fontSize: 14,
    },

    //LISTA DE CONTATOS

    imagem: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        borderRadius: 25,
        marginRight: 15,
        marginLeft: 12,
    },

    name: {
        color: '#e9edef',
        fontWeight: 'bold',
        marginBottom: 4,
    },

    mens: {
        color: '#8e8e93',
    },

    hour: {
        color: '#8e8e93',
        alignSelf: 'flex-start',
        marginRight: 10,
        marginTop: 20,
    },

    box: {
        flex: 1,
        justifyContent: 'center',
    },

    container1: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    container2: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    container3: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    container4: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    container5: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    container6: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    container7: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    container8: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    container9: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },


});