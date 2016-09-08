/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {Component} from 'react';
import  {
    StyleSheet,
    Text,
    ListView
} from 'react-native';

let Dimensions = require('Dimensions');
let screenWidth = Dimensions.get('window').width;


class MyListView extends Component {

    print(info) {
        console.log("MyListView", info);
    }

    constructor(props, context) {
        super(props);
        this.print("constructor()");
    }

    componentWillMount() {
        this.print("componentWillMount()");
    }

    componentWillUnmount() {
        this.print("componentWillUnmount()");
    }

    componentDidMount() {
        this.print("componentDidMount()");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.print("componentWillReceiveProps()");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        this.print("shouldComponentUpdate()");
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.print("componentWillUpdate()");
    }

    componentDidUpdate() {
        this.print("componentDidUpdate()");
    }
    
    onPress(){
        console.log("onPress");
    }

    render() {
        this.print("render()");
        return (
            <ListView
                {...this.props}
                renderRow={(rowData) =>
                    <Text style={{
                        width: screenWidth,
                        fontSize: 40,
                        marginTop: 5,
                        backgroundColor:'green',
                    }}
                          onPress={this.onPress}>
                        {rowData}
                        </Text>}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default MyListView;
