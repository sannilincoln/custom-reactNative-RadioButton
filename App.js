import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RadioButtonComponent from './components/RadioButtonComponent';

export default function App() {
  const [lessonType, setLessonType] = React.useState('');

  console.log(lessonType);
  return (
    <View style={styles.container}>
      <RadioButtonComponent
        label={'Lesson type'}
        radioText1={'Physical'}
        subRadioText1={'Home Lesson'}
        radioText2={'Online'}
        subRadioText2={'Virtual Lesson'}
        value={lessonType}
        onValueChange={item => setLessonType(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
