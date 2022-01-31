import { NativeBaseProvider } from 'native-base'
import AppStack from './src/stacks/AppStack'

export default function App() {
  return (
    <NativeBaseProvider>
      <AppStack />
    </NativeBaseProvider>
  )
}
