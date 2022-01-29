import { NativeBaseProvider } from 'native-base'
import Header from './src/components/layout/Header'
import AppStack from './src/stacks/AppStack'

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <AppStack />
    </NativeBaseProvider>
  )
}
