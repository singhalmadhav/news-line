import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const ExpandableCard = ({ title, content, url }) => {
    const [expanded, setExpanded] = useState(false);
    const [animation, setAnimation] = useState(new Animated.Value(0));

    const toggleExpand = () => {
        const initialValue = expanded ? 1 : 0;
        const finalValue = expanded ? 0 : 1;

        setExpanded(!expanded);

        animation.setValue(initialValue);
        Animated.timing(animation, {
            toValue: finalValue,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const animatedHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 120], // Adjust the expanded height as needed
    });

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={toggleExpand} activeOpacity={0.8}>
                    <AntDesign style={{
                        alignItems: 'flex-end',
                        margin: 4,
                    }} name="downcircle" size={20} color="grey" />
                </TouchableOpacity>
            </View>

            <Animated.View style={[styles.content, { height: animatedHeight }]}>
                <Text>{content}</Text>
                <TouchableOpacity style={{
                    marginTop: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style=
                        {{
                            color: "#0A86F8",
                            fontWeight: 500
                        }}>
                        Click To View Story
                    </Text>
                    <AntDesign name="rightcircle" size={20} color="grey" />

                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#f2f2f2',
        margin: 3,
    },
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        margin: 5,
        padding: 4,
    },
    content: {
        overflow: 'hidden',
        margin: 5,
        padding: 5
    },
});

export default ExpandableCard;
