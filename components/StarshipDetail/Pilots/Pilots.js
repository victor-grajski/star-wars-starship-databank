import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import Context from '../../../Context';

export default function Pilots({ ship }) {
    const { orientation } = useContext(Context);
    let { length, cost_in_credits, crew, passengers, hyperdrive_rating, MGLT } = ship;
    let styles = getStyles(orientation);
    
    return (
        <View
          style={styles.container}
        >
            <Text style={styles.title}>Pilots</Text>
            <ScrollView style={styles.statsContainer} horizontal={true} >
                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Length</Text>
                    <Text style={styles.statsItemNumber}>{length}</Text>
                    <Text style={styles.unit}>Meters</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Cost</Text>

                    {cost_in_credits === "unknown" ? (
                        <Text style={styles.statsItemNumber}>?</Text>
                    ) : (
                        <Text style={styles.statsItemNumber}>{cost_in_credits}</Text>
                    )}
                    
                    <Text style={styles.unit}>Credits</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Crew</Text>
                    <Text style={styles.statsItemNumber}>{crew}</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Passengers</Text>
                    <Text style={styles.statsItemNumber}>{passengers}</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>Hyperdrive Rating</Text>
                    <Text style={styles.statsItemNumber}>{hyperdrive_rating}</Text>
                </View>

                <View style={styles.statsItem}>
                    <Text style={styles.statsItemTitle}>MGLT</Text>
                    <Text style={styles.statsItemNumber}>{MGLT}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const getStyles = (orientation) => {
    if (orientation === 'PORTRAIT') {
      return StyleSheet.create({
        container: {
          alignItems: "center",
          flex: 1,
          height: '100%',
          width: '100%'
        },
        title: {
          paddingTop: 30,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 24,
          fontWeight: '500',
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        subtitle: {
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 18,
          color: '#fff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 30,
        },
        statsContainer: {
            paddingTop: 20,
            paddingLeft: 20,
            flex: 1,
            flexDirection: "row",
            overflow: "scroll",
        },
        statsItem: {
            flex: 1,
            marginRight: 50,
            alignItems: "center",
        },
        statsItemTitle: {
            fontSize: 18,
            color: '#fff',
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
        },
        statsItemNumber: {
          paddingTop: 10,
          fontSize: 48,
          color: '#fff',

          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        unit: {
            paddingTop: 10,
            fontSize: 12,
            color: '#fff',
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
        },
      });
    } else {
      return StyleSheet.create({
        container: {
          alignItems: "center",
          flex: 1,
          height: '100%',
          width: '100%'
        },
        title: {
          paddingTop: 30,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 24,
          fontWeight: '500',
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        subtitle: {
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 18,
          color: '#fff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 30,
        },
        statsContainer: {
            paddingTop: 20,
            paddingLeft: 20,
            flex: 1,
            flexDirection: "row",
            overflow: "scroll",
        },
        statsItem: {
            flex: 1,
            marginRight: 50,
            alignItems: "center",
        },
        statsItemTitle: {
            fontSize: 18,
            color: '#fff',
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
        },
        statsItemNumber: {
          paddingTop: 10,
          fontSize: 48,
          color: '#fff',

          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        unit: {
            paddingTop: 10,
            fontSize: 12,
            color: '#fff',
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
        },
      });
    }
  } 
  