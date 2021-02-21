import React, { memo } from 'react';
import {StyleSheet, View, Text} from "react-native";
import {white} from "react-native-paper/lib/typescript/styles/colors";

const styles = StyleSheet.create({
    numberDisplay:{
        flex: 2.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    displayText: {
      fontSize: 90,
        color: 'white',
        marginRight: 15
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    displayBox:{
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'flex-end', /* center items vertically, in this case */
        alignItems: 'flex-end',     /* center items horizontally, in this case */
    },
    box: {
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'center', /* center items vertically, in this case */
        alignItems: 'center',     /* center items horizontally, in this case */
    },
    box2: {
        backgroundColor: 'green'
    },
    box3: {
        backgroundColor: 'orange'
    },
    two: {
        flex: 2
    }
});

const Calculator = () => (
    <View style={styles.container}>
        <View style={styles.numberDisplay}>
            <View style={[styles.displayBox]}>
                <Text style={styles.displayText}>
                    12.85
                </Text>
            </View>
        </View>

        <View style={styles.row}>
            <View style={[styles.box, styles.box2]}/>
            <View style={[styles.box]}/>
            <View style={[styles.box, styles.box3]}/>
        </View>
        <View style={styles.row}>
            <View style={[styles.box, styles.box2]}/>
            <View style={[styles.box]}/>
            <View style={[styles.box, styles.box3]}/>
        </View>
        <View style={styles.row}>
            <View style={[styles.box, styles.box2]}/>
            <View style={[styles.box]}/>
            <View style={[styles.box, styles.box3]}/>
        </View>

        <View style={styles.row}>
            <View style={[styles.box, styles.box2]}/>
            <View style={[styles.box]}/>
        </View>
    </View>
);



export default memo(Calculator);


