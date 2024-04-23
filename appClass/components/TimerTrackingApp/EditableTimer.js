import { useState } from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";
import { StyleSheet, View, Text } from "react-native";

export default function EditableTimer(props) {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [timerState, setTimerState] = useState({
    elapsed: props.elapsed,
    isRunning: props.isRunning,
  });
  const toggleForm = (data) => {
    if(!editFormOpen){
      setTimerState(data)
    }
    setEditFormOpen(!editFormOpen);
  };

  const submitAction = (data) => {
    const id = props.id;
    props.onTimerUpdate({
      ...data,
      id,
      elapsed: timerState.elapsed,
      isRunning: timerState.isRunning,
    });
    
  };

  return (
    <View>
      {editFormOpen ? (
        <View>
          <TimerForm
            id={props.id}
            title={props.title}
            project={props.project}
            submitAction={submitAction}
            closeForm={toggleForm}
          />
        </View>
      ) : (
        <View>
          <Timer
            id={props.id}
            title={props.title}
            project={props.project}
            elapsed={props.elapsed}
            isRunning={props.isRunning}
            editAction={toggleForm}
            removeAction={props.removeAction}
          />
        </View>
      )}
    </View>
  );
}
