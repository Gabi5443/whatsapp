import { Image, StyleSheet, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

export default function Index() {
    return (
        <View style={styles.all}>

            <View style={styles.topIcons}>
                <View style={styles.circle}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>···</Text>
                </View>
            </View>

            <Text style={styles.titulo}>Atualizações</Text>

            <View style={styles.searchcont}>
                <View style={styles.searchbar}>
                    <Feather name="search" size={17} color="#8e8e93" />
                    <Text style={styles.searchtext}> Pesquisar</Text>
                </View>
            </View>

            <Text style={styles.tituloStatus}>Status</Text>

            <View style={styles.containerPerfil}>
                <View style={styles.boxImagemPerfil}>
                    <Image style={styles.imagemPerfil} source={require('../../assets/fotoperfil.png')} />
                    <View style={[styles.circleImagemPerfil, { backgroundColor: '#37c957' }]}>
                        <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold' }}>+</Text>
                    </View>
                </View>
                <View style={styles.boxPerfil}>
                    <Text style={styles.namePerfil}>Adicionar status</Text>
                    <Text style={styles.comentPerfil}>Desaparecerá em 24 horas</Text>
                </View>

                <View style={{ flexDirection: 'row', gap: 12, marginRight: 16 }}>
                    <View style={styles.circlePerfil}>
                        <Text><Feather name="camera" size={20} color="white" /></Text>
                    </View>
                    <View style={styles.circlePerfil}>
                        <Text style={{ color: '#fff' }}>
                            <Ionicons name="pencil" size={20} color="white" />
                        </Text>
                    </View>
                </View>
            </View>

            <Text style={{ color: '#8e8e93', fontSize: 13, fontWeight: 'bold', paddingHorizontal: 12, marginTop: 10 }}> Atualizações recentes</Text>


            <View style={styles.containerStatus1}>
                <Image style={styles.imagemStatus} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.boxStatus}>
                    <Text style={styles.nameStatus}>Contato</Text>
                    <Text style={styles.hourStatus}>há 2h</Text>
                </View>
            </View>

            <View style={styles.containerStatus2}>
                <Image style={styles.imagemStatus} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.boxStatus}>
                    <Text style={styles.nameStatus}>Contato 2</Text>
                    <Text style={styles.hourStatus}>há 4h</Text>
                </View>
            </View>

            <View style={styles.containerStatus3}>
                <Image style={styles.imagemStatus} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.boxStatus}>
                    <Text style={styles.nameStatus}>Contato 5</Text>
                    <Text style={styles.hourStatus}>há 7h</Text>
                </View>
            </View>

            <Text style={styles.tituloCanais}>Canais</Text>
            <Text style={{ color: '#8e8e93', paddingHorizontal: 12 }}>Receba atualizações sobre os assuntos do seu interesse. Encontre canais que você pode seguir abaixo.</Text>
            <Text style={styles.comentCanais}> Encontrar canais para seguir</Text>

            <View style={styles.containerCanais}>
                <Image style={styles.imagemCanais} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.boxCanais}>
                    <Text style={styles.nameCanais}>Canal 1</Text>
                    <Text style={styles.followCanais}>Seguidores: 1,5 M</Text>
                </View>

                <View style={{ flexDirection: 'row', gap: 12, marginRight: 16, alignItems: 'center' }}>
                    <View style={styles.circleCanais}>  
                        <Text style={styles.textCanais}> Seguir </Text>
                    </View>
                    <AntDesign name="close" size={15} color="white" />
                </View>
            </View>

            <View style={styles.containerCanais1}>
                <Image style={styles.imagemCanais} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.boxCanais}>
                    <Text style={styles.nameCanais}>Canal 2</Text>
                    <Text style={styles.followCanais}>Seguidores: 2,5 M</Text>
                </View>

                <View style={{ flexDirection: 'row', gap: 12, marginRight: 16, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.circleCanais}>  
                        <Text style={styles.textCanais}> Seguir </Text>
                    </View>
                    <AntDesign name="close" size={15} color="white" />
                </View>
            </View>

            <View style={styles.containerCanais2}>
                <Image style={styles.imagemCanais} source={require('../../assets/fotoperfil.png')} />
                <View style={styles.boxCanais}>
                    <Text style={styles.nameCanais}>Canal 3</Text>
                    <Text style={styles.followCanais}>Seguidores: 1,7 M</Text>
                </View>

                <View style={{ flexDirection: 'row', gap: 12, marginRight: 16, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.circleCanais}>  
                        <Text style={styles.textCanais}> Seguir </Text>
                    </View>
                    <AntDesign name="close" size={15} color="white" />
                </View>
            </View>

            <View style={styles.containerButtons}>
                <View style={styles.containerMoreCanais}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}><Feather name="grid" size={17} color="white" /> Mostrar mais</Text>

                </View>
                <View style={styles.containerCriarCanais}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}><Entypo name="plus" size={20} color="white" /> Criar canais</Text>

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

    //TITULOS
    titulo: {
        color: '#ffffff',
        fontSize: 34,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingVertical: 6,
    },

    tituloStatus: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 16,
    },

    tituloCanais: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 20,
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

    //CONTAINER PERFIL PESSOAL

    imagemPerfil: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        borderRadius: 25,
        marginRight: 15,
        marginLeft: 12,
    },

    circleImagemPerfil: {
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

    boxImagemPerfil: {
        position: 'relative',
        width: 62,
        height: 50,
    },

    boxPerfil: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 7,
    },

    namePerfil: {
        color: '#e9edef',
        fontWeight: 'bold',
        marginBottom: 4,
    },

    comentPerfil: {
        color: '#8e8e93',
    },

    containerPerfil: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
    },

    circlePerfil: {
        width: 35,
        height: 35,
        borderRadius: 18,
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //STATUS

    imagemStatus: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        borderRadius: 25,
        marginRight: 15,
        marginLeft: 12,
        borderWidth: 2,
        borderColor: '#37c957',
    },

    boxStatus: {
        flex: 1,
        justifyContent: 'center',
    },

    nameStatus: {
        color: '#e9edef',
        fontWeight: 'bold',
        marginBottom: 4,
    },

    hourStatus: {
        color: '#8e8e93',
    },

    containerStatus1: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    containerStatus2: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    containerStatus3: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
    },

    //CANAIS

    comentCanais: {
        color: '#8e8e93',
        fontWeight: 'bold',
        paddingHorizontal: 7,
        paddingTop: 10,
    },

    containerCanais: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    containerCanais1: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#2c2c2e',
    },

    containerCanais2: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
    },

    imagemCanais: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        borderRadius: 25,
        marginRight: 15,
        marginLeft: 12,
    },

    boxCanais: {
        flex: 1,
        justifyContent: 'center',
    },

    nameCanais: {
        color: '#e9edef',
        fontWeight: 'bold',
        marginBottom: 4,
    },

    followCanais: {
        color: '#8e8e93',
    },

    circleCanais: {
        width: 75,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#37c95760',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textCanais: {
        color: '#37c957',
        fontSize: 14, 
        fontWeight: '600', 
    },

    //BOTÕES

    containerButtons: {
        paddingVertical: 15,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },

    containerMoreCanais: {
        height: 40,
        width: '90%',
        borderRadius: 20,
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerCriarCanais: {
        height: 40,
        width: '90%',
        borderRadius: 20,
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center',
    },


});