import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, AppState } from "react-native";
import EditableTimer from "./components/TimerTrackingApp/EditableTimer";
import ToggableTimerForm from "./components/TimerTrackingApp/ToggleableTimerForm";
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key,data)=>{
  try{
    await AsyncStorage.setItem(
      key,
      JSON.stringify(data)
    )
  }catch(err){
    console.log(err);

  }
}


function App() {
  const [timers, setTimers] = useState([])
  const [appState,setAppState] = useState(AppState.currentState)

  useEffect(() => {
    if (appState.match(/inactive|background/)) {
        console.log('Saving: ' + JSON.stringify(timers));
        storeData('TIMERS_DATA', timers);
    }
}, [appState]);
useEffect(() => {
    (async () => {
        const jsonData = await AsyncStorage.getItem('TIMERS_DATA');
        console.log('Loaded: ' + jsonData);
        setTimers(jsonData ? JSON.parse(jsonData) : []);
    })();
    const sub = AppState.addEventListener(
        'change',
        setAppState
    );
    return () => {
        sub.remove();
    }
}, []);

  const removeTimer = (tm) => {
    let newTimer = timers.slice();
    let index = newTimer.indexOf(tm);
    if (index > -1) {
      newTimer.splice(index, 1);
    }
    setTimers(newTimer);
  };

  const handleUpdate = (data) => {
    let newTimers = timers.slice();
    for (let i = 0; i < newTimers.length; i++) {
      if (newTimers[i].id == data.id) {
        newTimers[i].title = data.title;
        newTimers[i].project = data.project;
        newTimers[i].elapsed = data.elapsed;
        newTimers[i].isRunning = data.isRunning;
        break;
      }
    }
    setTimers(newTimers);

  };

  const handleCreateTimer = (data) => {
    console.log(data);
    const copyTimer = timers.slice();
    copyTimer.push(data);
    setTimers(copyTimer);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.headerTitle}>
          <Text style={styles.textHeader}>Timers</Text>
        </View>
      </View>
      <ScrollView>
        <ToggableTimerForm submitCreateTimer={handleCreateTimer} />
        {timers.map((timer) => (
          <EditableTimer
            key = {timer.id}
            id={timer.id}
            title={timer.title}
            project={timer.project}
            elapsed={timer.elapsed}
            isRunning={timer.isRunning}
            onTimerUpdate={handleUpdate}
            removeAction={() => {
              removeTimer(timer);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 20,
  },
  headerTitle: {
    width: 450,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#E4DCCF",
  },
});
