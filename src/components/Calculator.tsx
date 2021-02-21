import React, { memo } from 'react';
import {StyleSheet, View, Text} from "react-native";

const styles = StyleSheet.create({
    numberDisplay:{
        flex: 2.4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    displayText: {
        fontSize: 90,
        color: 'white',
        marginRight: 15
    },
    buttonText: {
        fontSize: 45,
        color: 'white',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'grey'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    displayBox:{
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    box: {
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'center', /* center items vertically, in this case */
        alignItems: 'center',     /* center items horizontally, in this case */
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey',
    },
    arithmeticBox: {
        backgroundColor: 'orange'
    },
    acBox: {
        backgroundColor:'darkgrey',
    }
});

const Calculator = () => {
    const firstRowNum = [7,8,9]
    const secondRowNum = [4,5,6]
    const thirdRowNum = [1,2,3]
    const fourthRowNum = [0, '.']
    return (
        <View style={styles.container}>
            <View style={styles.numberDisplay}>
                <View style={[styles.displayBox]}>
                    <Text style={styles.displayText}>
                        12.85
                    </Text>
                </View>
            </View>

            <View style={styles.row}>
                {firstRowNum.map(n => (
                    <View style={[styles.box]}>
                        <Text style={[styles.buttonText]}>{n}</Text>
                    </View>
                ))}
                <View style={[styles.box, styles.acBox]}>
                    <Text style={[styles.buttonText]}>AC</Text>
                </View>
            </View>
            <View style={styles.row}>
                {secondRowNum.map(n => (
                    <View style={[styles.box]}>
                        <Text style={[styles.buttonText]}>{n}</Text>
                    </View>
                ))}
                <View style={[styles.box, styles.arithmeticBox]}>
                    <Text style={[styles.buttonText]}>+</Text>
                </View>
            </View>
            <View style={styles.row}>
                {thirdRowNum.map(n => (
                    <View style={[styles.box]}>
                        <Text style={[styles.buttonText]}>{n}</Text>
                    </View>
                ))}
                <View style={[styles.box, styles.arithmeticBox]}>
                    <Text style={[styles.buttonText]}>-</Text>
                </View>
            </View>
            <View style={styles.row}>
                {fourthRowNum.map(n => (
                    <View style={[styles.box]}>
                        <Text style={[styles.buttonText]}>{n}</Text>
                    </View>
                ))}
                <View style={[styles.box, {flex: 2, backgroundColor: 'lightblue'}]}>
                    <Text style={[styles.buttonText]}>=</Text>
                </View>
            </View>
        </View>
    )
};

export default memo(Calculator);


