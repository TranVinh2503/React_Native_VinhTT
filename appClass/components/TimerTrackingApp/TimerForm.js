import { TextInput } from "react-native";
import { StyleSheet, View, Text, Button } from "react-native";
import TimerButton from "./TimerButton";
import { useState } from "react";

function TimerForm(props) {
  const [title, setTitle] = useState(props.title);
  const [project, setProject] = useState(props.project);

  const submitText = props.id ? "Update" : "Create";
  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={props.title}
            onChangeText={setTitle}
            value={title}
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={props.project}
            onChangeText={setProject}
            value={project}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton
          small
          title={submitText}
          color="green"
          onPress={() => {
            props.submitAction({
              title: title,
              project: project,
            });
            props.closeForm()
          }}
        />
        <TimerButton
          small
          title="Cancel"
          color="red"
          onPress={props.closeForm}
        />
      </View>
    </View>
  );
}

export default TimerForm;

const styles = StyleSheet.create({
  formContainer: {
    borderWidth: 3,
    borderRadius: 6,
    padding: 15,
    borderColor: "#bbb",
  },
  attributeContainer: {
    marginBottom: 15,
  },
  textInputTitle: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
  textInputContainer: {
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderColor: "#bbb",
  },
  textInput: {},
  buttonGroup: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
