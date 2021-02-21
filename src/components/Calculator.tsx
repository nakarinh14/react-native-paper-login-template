import React, {memo, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {calculateNumber} from "../core/calculator";

const styles = StyleSheet.create({
    numberDisplay:{
        flex: 1.9,
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
    const [currentVal, setCurrentVal] = useState("");
    const [num, setNum] = useState("");
    const [displayVal, setDisplayVal] = useState("0");
    const [currentOper, setOperation] = useState("");

    const onClickNum = (val) => {
        // Validate that "." doesn't occur more than once.
        if(val === "." && currentVal.includes(".")){
            return
        }
        let newVal = currentVal + val
        if(newVal === "."){
            newVal = "0."
        }
        setCurrentVal(newVal)
        setDisplayVal(newVal)
    }
    const onClickOper = (oper) => {
        // If there is an existing currentVal, calculate new val.
        if(currentVal){
            calculateNewNum();
        }
        // Set new operation in the end
        setOperation(oper);
    }
    const resetCalculator = () => {
        // AC reset everything
        setNum("");
        setCurrentVal("");
        setDisplayVal("0");
        setOperation("");
    }
    const calculateNewNum = () => {
        // If currentVal doesnt exist, don't do anything
        if(!currentVal){
            return;
        }
        // If there is an existing operation, do a calculation.
        const result = (num && currentOper ?
            calculateNumber(num, currentVal, currentOper) : currentVal).toString();

        setCurrentVal("");
        setNum(result);
        setDisplayVal(result)
        setOperation(null)
    }

    return (
        <View style={styles.container}>
            <View style={styles.numberDisplay}>
                <View style={[styles.displayBox]}>
                    <Text style={styles.displayText}>
                        {displayVal}
                    </Text>
                </View>
            </View>

            <View style={styles.row}>
                {["7","8","9"].map(n => (
                    <TouchableOpacity
                        key={n}
                        style={[styles.box]}
                        onPress={() => onClickNum(n)}
                    >
                        <Text style={[styles.buttonText]}>{n}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    style={[styles.box, styles.acBox]}
                    onPress={resetCalculator}
                >
                    <Text style={[styles.buttonText]}>AC</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                {["4","5","6"].map(n => (
                    <TouchableOpacity
                        key={n}
                        style={[styles.box]}
                        onPress={() => onClickNum(n)}
                    >
                        <Text style={[styles.buttonText]}>{n}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    style={[styles.box, styles.arithmeticBox]}
                    onPress={() => onClickOper("+")}
                >
                    <Text style={[styles.buttonText]}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                {["1","2","3"].map(n => (
                    <TouchableOpacity
                        style={[styles.box]}
                        key={n}
                        onPress={() => onClickNum(n)}
                    >
                        <Text style={[styles.buttonText]}>{n}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    style={[styles.box, styles.arithmeticBox]}
                    onPress={() => onClickOper("-")}
                >
                    <Text style={[styles.buttonText]}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                {[0,'.'].map(n => (
                    <TouchableOpacity
                        style={[styles.box]}
                        key={n}
                        onPress={() => onClickNum(n)}
                    >
                        <Text style={[styles.buttonText]}>{n}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    style={[styles.box, {flex: 2, backgroundColor: 'lightblue'}]}
                    onPress={calculateNewNum}
                >
                    <Text style={[styles.buttonText]}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default memo(Calculator);


