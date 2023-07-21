import React, { Component } from "react"
import { StyleSheet, View } from 'react-native';

import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, ListItemSwipeableProps, Text } from "react-native-elements"

import {MyContext } from "../../Context";

const Stage1 = () => {
    const context = React.useContext(MyContext);

    return(
        <Formik
            initialValues={{player:""}}
            validationSchema={Yup.object({
                player: Yup.string()
                .min(3, "Must be more than 3 char")
                .max(15, "Must be more less tan 15 char")
                .required("Sorry, the name is required")
            })}
            onSubmit={(values, {resetForm}) => {
                alert(values)
            }}
        >
            {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
                <>
                    <Text>Who paus the bill</Text>
                    <Input placeholder="Add names here"
                        leftIcon={{type: "antdesign", name:"adduser"}}
                        inputContainerStyle={{
                            marginHorizontal:50,
                            marginTop: 50,
                        }}
                        onChangeText={handleChange("player")}
                        onBlur={handleBlur("player")}
                        valye={values.player}
                    />
                    <Button
                        buttonStyle={{}}
                        title="Add player"
                        onPress={handleSubmit}
                    />
                </>
            )}
        </Formik>
    );
}
export { Stage1 };