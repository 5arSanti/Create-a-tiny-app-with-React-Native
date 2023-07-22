import React, { Component } from "react"
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MyContext, MyProvider } from "./src/Context";

//Componentes
import { Stage1 } from "./src/components/Stage1";
import { Stage2 } from "./src/components/Stage2";

import Toast from "react-native-toast-message";


class App extends Component {

	render(){
		return (
			<MyProvider>
				<ScrollView>
					<View style={styles.container}>
						<MyContext.Consumer>
							{context => (
								context.state.stage === 1 ? <Stage1/> : <Stage2/>
							)}
						</MyContext.Consumer>
					</View>
				</ScrollView>
				<Toast ref={(ref) => Toast.setRef(ref)} />
			</MyProvider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",

		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',

		marginVertical: 100,
	},
});

export default  App;