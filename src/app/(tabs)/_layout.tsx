import { colors, fontSize } from '@/constants/tokens'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'

const TabsNavigation = () => {
    return (
        <Tabs 
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: '500',
                },
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderTopWidth: 0,
                    paddingTop: 8,
                },
                tabBarBackground: () => (
                    <BlurView
                        intensity={95}
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            overflow: 'hidden',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}
                    />
                ),
            }}
        >
    
            <Tabs.Screen name="favorites"
                name="favorites"
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20} color={color} />,
                }}
            />
            <Tabs.Screen name="playlists" 
                name="playlists"
                options={{
                    title: 'Playlists',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="playlist-play" size={28} color={color} />
                    ),
                }}
            />
            <Tabs.Screen name="(songs)" 
                name="(songs)"
                options={{
                    title: 'Songs',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="musical-notes-sharp" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen name="random" 
                name="random"
                options={{
                    title: 'Random',
                    tabBarIcon: ({ color }) => <Ionicons name="dice" size={24} color={color} />,
                }}
            />
        </Tabs>
    )}


export default TabsNavigation