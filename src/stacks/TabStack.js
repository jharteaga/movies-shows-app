import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Header from '../components/layout/Header'
import { MoviesScreen, SearchScreen, TvShowsScreen } from '../screens'

const Tab = createMaterialTopTabNavigator()

const TabStack = () => {
  return (
    <>
      <Header />
      <Tab.Navigator
        initialRouteName="Movies"
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: '#2c3e50', height: 3 },
          tabBarLabelStyle: { textTransform: 'none', fontSize: 13 }
        }}
      >
        <Tab.Screen
          name="Movies"
          options={{ tabBarLabel: 'Movies' }}
          component={MoviesScreen}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{ tabBarLabel: 'Search Results' }}
        />
        <Tab.Screen
          name="TvShows"
          title="TV"
          component={TvShowsScreen}
          options={{ tabBarLabel: 'TV Shows' }}
        />
      </Tab.Navigator>
    </>
  )
}

export default TabStack
