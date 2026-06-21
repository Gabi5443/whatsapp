import { Image, StyleSheet, Text, View } from "react-native"
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function Index() {
    return (
        <View style={styles.all}>

            <View style={styles.topIcons}>
                <View style={styles.circle}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>···</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <View style={[styles.circle, { backgroundColor: '#37c957' }]}>
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>+</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.titulo}>Ligações</Text>

            <View style={styles.searchcont}>
                <View style={styles.searchbar}>
                    <Feather name="search" size={17} color="#8e8e93" />
                    <Text style={styles.searchtext}> Pesquisar</Text>
                </View>
            </View>

            <View style={styles.icons}>
                <View style={styles.circleIcons}>
                    <Text style={{ color: '#fff' }}>
                        <Ionicons name="call-outline" size={20} color="white" />
                    </Text>
                </View>
                <View style={styles.circleIcons}>
                    <Text style={{ color: '#fff' }}>
                        <Ionicons name="calendar" size={20} color="white" />
                    </Text>
                </View>
                <View style={styles.circleIcons}>
                    <Text style={{ color: '#fff' }}>
                        <Fontisto name="nav-icon-grid-a" size={20} color="white" />
                    </Text>
                </View>
                <View style={styles.circleIcons}>
                    <Text style={{ color: '#fff' }}>
                        <Feather name="heart" size={20} color="white" />
                    </Text>
                </View>
            </View>

            <View style={styles.iconsText}>
                <Text style={{ color: 'white' }}>Ligar</Text>
                <Text style={{ color: 'white' }}>Programar</Text>
                <Text style={{ color: 'white' }}>Teclado</Text>
                <Text style={{ color: 'white' }}>Favoritos</Text>
            </View>

            <Text style={styles.tituloLigações}>Ligações recentes</Text>

            <View style={styles.containerCall1}>
                <Image style={styles.imagemCall} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.boxCall}>
                    <Text style={styles.nameCall}>Contato</Text>
                    <Text style={styles.descCall}><SimpleLineIcons name="call-in" size={10} color="white" /> Perdida</Text>
                </View>
                <View style={styles.boxWhenInfoCall}>
                    <Text style={{color: '#8e8e93'}}> Ontem </Text>
                    <Ionicons name="information-circle-outline" size={24} color="white" />
                </View>
            </View>

            <View style={styles.containerCall2}>
                <Image style={styles.imagemCall} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.boxCall}>
                    <Text style={styles.nameCall}>Contato 1</Text>
                    <Text style={styles.descCall}><SimpleLineIcons name="call-out" size={10} color="white" /> Efetuada</Text>
                </View>
                <View style={styles.boxWhenInfoCall}>
                    <Text style={{color: '#8e8e93'}}> Ontem </Text>
                    <Ionicons name="information-circle-outline" size={24} color="white" />
                </View>
            </View>

            <View style={styles.containerCall3}>
                <Image style={styles.imagemCall} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.boxCall}>
                    <Text style={styles.nameCall}>Contato 2</Text>
                    <Text style={styles.descCall}><SimpleLineIcons name="call-in" size={10} color="white" /> Perdida</Text>
                </View>
                <View style={styles.boxWhenInfoCall}>
                    <Text style={{color: '#8e8e93'}}> Ontem </Text>
                    <Ionicons name="information-circle-outline" size={24} color="white" />
                </View>
            </View>

            <View style={styles.containerCall4}>
                <Image style={styles.imagemCall} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.boxCall}>
                    <Text style={styles.nameCall}>Contato 3</Text>
                    <Text style={styles.descCall}><SimpleLineIcons name="call-out" size={10} color="white" /> Efetuada</Text>
                </View>
                <View style={styles.boxWhenInfoCall}>
                    <Text style={{color: '#8e8e93'}}> Ontem </Text>
                    <Ionicons name="information-circle-outline" size={24} color="white" />
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

    //ICONE

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
        paddingVertical: 16,
    },

    tituloLigações: {
        color: '#ffffff',
        fontSize: 20,
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

    //ICONES

    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 26,
        marginTop: 20,
    },

    circleIcons: {
        width: 50,
        height: 50,
        borderRadius: 28,
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconsText: {
        flexDirection: 'row',
        marginTop: 7,
        paddingHorizontal: 35,
        gap: 45,
    },

    //LIGAÇÕES

    imagemCall: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        borderRadius: 25,
        marginRight: 15,
        marginLeft: 12,
    },

    boxCall: {
        flex: 1,
        justifyContent: 'center',
    },

    nameCall: {
        color: '#e9edef',
        fontWeight: 'bold',
        marginBottom: 4,
    },

    descCall: {
        color: '#8e8e93',
    },

    boxWhenInfoCall: {
        alignSelf: 'center',
        marginRight: 10,
        marginVertical: 20,
        flexDirection: 'row',
        gap: 7,
    },

    containerCall1: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    containerCall2: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    containerCall3: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    containerCall4: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

});