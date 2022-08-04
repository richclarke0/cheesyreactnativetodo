import { StatusBar } from 'expo-status-bar';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskItem from './TaskItem';

export default function App() {
  const [tasks, setTasks] = useState()

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks,task]);
    Keyboard.dismiss()
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value,index) => index != deleteIndex))
  }
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {
          tasks.map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem index={index+1} task={task} deleteTask={() => deleteTask(index)}/>
              </View>
            )
          })
        }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});
