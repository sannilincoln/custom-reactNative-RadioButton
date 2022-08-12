import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { AppProps} from '../types'


 
const RadioButtonComponent = ({ label,value,onValueChange,radioText1,subRadioText1,radioText2,subRadioText2}:AppProps) => {
    const [isChecked, setChecked] = React.useState(false);
    const [isChecked2, setChecked2] = React.useState(false);

    const [color, setColor] = React.useState('F1F1F1')

    const handlePress = () => {
      setChecked(!isChecked)
        setColor('#0096FF')
        setChecked2(false)
    }
      const handlePress2 = () => {
      setChecked2(!isChecked2)
        setColor('#0096FF')
        setChecked(false)
    }
  
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.box}>

              <TouchableOpacity
              onPress={handlePress}
              style={styles.innerBox}
              >
               <View style={{
                borderColor:isChecked ? '#0096FF' :'gray',
                borderWidth: 1,
                 borderRadius:5,
                    }} >
                <View style={styles.check}>
                <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#0096FF' :'gray'}
              />
                <View style={styles.textbox}>
                  <Text style={styles.text}>{radioText1}</Text>
                  <Text style={styles.text}>{subRadioText1}</Text>
                </View>
                </View>
              </View>
              </TouchableOpacity>

                <TouchableOpacity
              onPress={handlePress2}
              style={styles.innerBox}
              >
              <View style={{
                borderColor:isChecked2 ? '#0096FF' :'gray',
                borderWidth: 1,
                 borderRadius:5,
                    }} >
                <View style={styles.check}>
                <Checkbox
                style={styles.checkbox}
                value={isChecked2}
                onValueChange={setChecked2}
                color={isChecked2 ? '#0096FF' :'gray'}
              />
                <View style={styles.textbox}>
                  <Text style={styles.text}>{radioText2}</Text>
                  <Text style={styles.text}>{subRadioText2}</Text>
                </View>
                </View>
              </View>
              </TouchableOpacity>
             

           
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor:'gray'
  },
  text: {
    padding: 3,
    marginLeft:12
  },
  box: {
    flexDirection: 'row',
  },
  innerBox: {
    marginLeft: 10,
    marginVertical: 10,
    width:'45%',
    
    
  },
  check: {
    flexDirection:'row',
  },
  checkbox: {
    margin:8,
    borderRadius:10
  },
  textbox:{
    marginLeft:-10,
  }
});

export default RadioButtonComponent;
