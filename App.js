import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './screens/FeedScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import Ionicons from '@expo/vector-icons/Ionicons'
import LibraryScreen from './screens/LibraryScreen';
import CommunitiesScreen from './screens/CommunitiesScreen';
import CreateCommunityScreen from './screens/CreateCommunityScreen';
import UpdateCommunityScreen from './screens/UpdateCommunityScreen';
import UpdatePostScreen from './screens/UpdatePostScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import PostsScreen from './screens/PostsScreen';
import CommunityDetailScreen from './screens/CommunityDetailScreen';
import PostDetailScreen from './screens/PostDetailScreen';
import CommentsScreen from './screens/CommentsScreen';
import MessagesScreen from './screens/MessagesScreen';
import ChangeUsernameScreen from './screens/ChangeUsernameScreen';
import ChangeEmailScreen from './screens/ChangeEmailScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {

  return(
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'orangered', tabBarInactiveTintColor: 'gray'  }}>
      <Tab.Screen name='Feed' component={FeedScreen} options={{ tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ?  'home' : 'home-outline'} size={size} color={color} /> }}  />
      <Tab.Screen name='Search' component={SearchScreen} options={{ tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'search-circle' : 'search-circle-outline'} size={size} color={color} /> }} />
      <Tab.Screen name='Library' component={LibraryScreen} options={{ tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'book' : 'book-outline'} size={size} color={color} /> }} />
      <Tab.Screen name='Profile' component={ProfileScreen} options={{ tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} /> }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name='Communities' component={CommunitiesScreen} />
        <Stack.Screen name='CommunityDetail' component={CommunityDetailScreen} />
        <Stack.Screen name='CreateCommunity' component={CreateCommunityScreen} />
        <Stack.Screen name='UpdateCommunity' component={UpdateCommunityScreen} />
        <Stack.Screen name='Posts' component={PostsScreen} />
        <Stack.Screen name='PostDetail' component={PostDetailScreen} />
        <Stack.Screen name='CreatePost' component={CreatePostScreen} />
        <Stack.Screen name='UpdatePost' component={UpdatePostScreen} />
        <Stack.Screen name='Comments' component={CommentsScreen} />
        <Stack.Screen name='Messages' component={MessagesScreen} />
        <Stack.Screen name='ChangeUsername' component={ChangeUsernameScreen} />
        <Stack.Screen name='ChangeEmail' component={ChangeEmailScreen} />
        <Stack.Screen name='ChangePassword' component={ChangePasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
