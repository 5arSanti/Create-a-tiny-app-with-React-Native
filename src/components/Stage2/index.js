import React, { Component } from "react"
import { StyleSheet, Text, View } from 'react-native';
import { MyContext } from "../../Context";

import { Button } from "react-native-elements"
import { MainLogo } from "../../utils/tools";

const Stage2 = () => {
    const context = React.useContext(MyContext);

    return(
        <>
            <View>
                <MainLogo/>
                <Text>The looser is:</Text>
                <Text style={{marginTop: 30, fontSize: 30}}>{context.state.result}</Text>
                <Button
                    buttonStyle={styles.button}
                    title="Try again"
                    onPress={() => context.getNewLooser()}
                />
                <Button
                    buttonStyle={styles.button}
                    title="Start over"
                    onPress={() => context.resetGame()}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#41b6e6",
        marginTop: 20,
    }
})

export { Stage2 };