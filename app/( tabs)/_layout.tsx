import { Tabs } from "expo-router"
import { Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#161616',
                    borderTopWidth: 0.5,
                    borderTopColor: '#2c2c2e',
                    height: 60,
                    paddingBottom: 8,
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#8e8e93',
            }}
        >
            <Tabs.Screen
                name="index status"
                options={{
                    title: "Atualizações",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="circle-slice-8" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="index calls"
                options={{
                    title: "Ligações",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="call-outline" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="index comuni"
                options={{
                    title: "Comunidades",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people-outline" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "Conversas",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubbles" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="index perfil"
                options={{
                    title: "Você",
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../assets/fotoperfil.png')}
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: 12, 
                                borderWidth: focused ? 2 : 0, 
                                borderColor: 'white'
                            }} />
                    )
                }}
            />
        </Tabs>
    )
}