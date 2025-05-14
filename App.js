import { GestureHandlerRootView} from "react-native-gesture-hander"
import TaskList from "./src/screens/TaskList"
import { StyleSheet} from "react-native"


export defout function App() {
  return(
    <GestureHandlerRootView style={styles.container}>
     <TaskList />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
