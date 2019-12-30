import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import {getSecretWord} from "./actions";
import Input from "./Input";

class App extends Component {
    render() {
        return (
            <div data-test="component-app" className="container">
                <h1>Jotto</h1>
                <Congrats success={this.props.success}/>
                <Input/>
                <GuessedWords guessedWords={this.props.guessedWords}/>
            </div>
        );
    }
}

const mapStateToProps = ({success, secretWord, guessedWords}) => {
    return {success, secretWord, guessedWords};
};

export default connect(mapStateToProps, {getSecretWord})(App);
