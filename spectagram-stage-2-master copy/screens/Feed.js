import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

export default class Feed extends Component {
    render() {
        return (
            <View style={style.container}>
                <SafeAreaView style={StyleSheet.droidSafeArea} />
                <View style={styles.appTitle}>
                <View style={styles.appIcon}
            <Image
            source={require("../assets/logo.png")}
            style={styles.iconImage}
            ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
            </View>
         </View>   
         <View style={styles.cardContainer}>
         <FlatList
           keyExtractor={this.keyExtractor}
         data={posts}
renderItem={this.renderItem}
         />
         </View>
        </View>