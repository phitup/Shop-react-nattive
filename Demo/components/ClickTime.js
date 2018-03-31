import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity ,
 } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/style.js';


export default class ClickTime extends Component{

    constructor(props){
        super(props);
        this.state={
            number:0
        }
    }

    clickAdd(){
        this.setState({
            number:this.state.number + 1
        });
    }

    clickSub(){
        this.setState({
            number:this.state.number - 1
        });
    }

    clickReset(){
        this.setState({
            number:0
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.textHead}>ClickTime Application</Text>
                </View>
                <View style={styles.center}>
                    <Text style={styles.textCenter}>{this.state.number}</Text>
                </View>
                <View style={styles.centerBottom}>
                    <TouchableOpacity onPress={()=>{this.clickAdd();}} style={styles.centerBottomView}>
                        <View>
                            <Text style={styles.centerBottomText}>+</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.clickSub();}} style={styles.centerBottomView}>
                        <View>
                            <Text style={styles.centerBottomText}>-</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{this.clickReset();}} style={styles.bottom}>
                    <View>
                        <Text style={styles.text}>Reset</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
