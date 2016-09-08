import React, {Component} from 'react';
import {
    Text,
    View,
    ListView
} from 'react-native';
import MyListView from './mylistview';
class FullLifeCycle extends Component {

    print(info) {
        console.log("FullLifeCycle", info);
    }

    constructor(props, context) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        };
        this.print("constructor()");
    }

    componentWillMount() {
        this.print("componentWillMount()");
        this.fetchData();
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
    
    render() {
        this.print("render()");
        return (
            <View style={{ flex: 1 ,justifyContent: 'center',alignItems: 'center'}}>
                <MyListView dataSource={this.state.dataSource} />
                <Text
                    onPress={() => { this.testStateLifecycle() }}
                    style={{
                        position: 'absolute',
                        top: 300,
                        height: 60,
                        color: 'green',
                        left: 100,
                        fontSize: 25,
                        backgroundColor: '#123456'
                    }}>
                    测试生命周期
                </Text>
            </View>
        );
    }
    
    onPress(){
        console.log("Main:", this);
    }

    fetchData() {
        this.print("fetchData()");
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows([1, 2, 3, 4])
        });
    }

    testStateLifecycle() {
        this.print("testStateLifecycle()");
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows([5, 6, 7, 8])
        });
    }
}

export default FullLifeCycle;