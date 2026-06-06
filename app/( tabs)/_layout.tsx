import { Tabs } from "expo-router"

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index"
                options={{ title: "Conversas" }} />
            <Tabs.Screen name="index grupos"
                options={{ title: "Grupos" }} />
            <Tabs.Screen name="index status"
                options={{ title: "Status" }} />
            <Tabs.Screen name="index comuni"
                options={{ title: "Comunidades" }} />
        </Tabs>

    )
}