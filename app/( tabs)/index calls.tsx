import { Image, StyleSheet, Text, View } from "react-native"

export default function Index() {
    return (
        <View style={styles.all}>

            <View style={styles.topIcons}>
                <View style={styles.circle}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>···</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <View style={[styles.circle, { backgroundColor: '#37c957' }]}>
                        <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold' }}>+</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.titulo}>Ligações</Text>

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

});