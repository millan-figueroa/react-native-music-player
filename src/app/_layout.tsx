import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return ( // Added return statement here
		<Stack>
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} /> 
		</Stack>
	)
}

export default App

