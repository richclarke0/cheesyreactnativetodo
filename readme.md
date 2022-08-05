[Tutorial](https://javascript.plainenglish.io/build-a-todo-list-app-using-react-native-526f8fe11ff1)

The components TaskItem and TaskInputField will not work unless you remove the writer's choice of export:export default TaskInputField = (props) => {...  and just define the functions like this instead function TaskInputField(props) {...  and add export default TaskInputField to the bottom of the file.

Also, he forgot to include something called Platform in the react-nativeimports in the TaskInputField component. So make sure that line includes it, like this import ```{ Platform, KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, } from "react-native";```

To run the app, use expo start and press W once it fires up and it should run fine in the browser. 