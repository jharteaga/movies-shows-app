import { StatusBar } from 'expo-status-bar'
import { Box, NativeBaseProvider } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <Box py={10}>Hello World</Box>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  )
}
