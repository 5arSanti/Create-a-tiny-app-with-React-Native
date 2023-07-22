import React, {Component} from "react";

import Toast from "react-native-toast-message";

import * as Font from 'expo-font';

const MyContext = React.createContext();

let customFonts = {
	"Pacifico-Regular": require("../assets/fonts/Pacifico-Regular.ttf")
}

class MyProvider extends Component {
    state = {
        stage: 1,
        players: [],
        result: "",
        fontsLoaded: true,
    }

    async loadFonts() {
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded: true})
    }
    componentDidMount() {
        this.loadFonts();
    }

    addPlayerHandler = (name) => {
        this.setState((prevState, props) => ({
            players:[
                ...prevState.players,
                name
            ]
        }))
    }

    removePlayerHandler = (idx) => {
        let newArray = this.state.players;
        newArray.splice(idx,1);
        this.setState({players:newArray})
    }

    nextHandler = () => {
        const {players} = this.state;

        if (players.length < 2){
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Sorry",
                text2: "You nedd at least 2 players",
            })
        }
        else {
            this.setState({
                stage: 2
            }, () => {
                this.generateLooser()
            })
        }
    }

    generateLooser = () => {
        const {players} = this.state;
        this.setState({
            result: players[Math.floor(Math.random() * players.length)]
        })
    }

    resetGame = () => {
        this.setState({
            stage: 1, 
            players: [],
            result: ""
        })
    }

    render() {
        return(
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    addPlayer: this.addPlayerHandler,
                    removePlayer: this.removePlayerHandler,
                    next: this.nextHandler,
                    getNewLooser: this.generateLooser,
                    resetGame: this.resetGame,
                }}>
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }
}

export {  MyProvider, MyContext }