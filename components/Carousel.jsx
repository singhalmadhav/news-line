import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text, Image, ActivityIndicator, ImageBackground } from 'react-native';
import useFetch from '../hook/useFetch';

// const data = [
//   { id: '1', title: 'Card 1', image_url: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais"},
//   { id: '2', title: 'Card 2', image_url: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais"},
//   { id: '3', title: 'Card 3', image_url: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais"},
// ];

const Carousel = () => {

    const { data, isLoading, error, refetch } = useFetch('top-headlines', 'us');

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <ImageBackground resizeMode='cover'
                source={{ uri: item.urlToImage }} style={{ width: 400, height: 400, backgroundColor: "#fff" }}
            >
                <View style={{
                    backgroundColor: '#000000c0',
                }}>
                    <Text style={{
                        color: 'white',
                        lineHeight: 60,
                        fontSize: 14,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>{item.title}</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between' }}>
                        <Text style={{color: 'white', fontSize: 10}}>{item.publishedAt}</Text>
                        <Text style={{color: 'white', fontSize: 10}}>{item.author}</Text>
                    </View>
                </View>
            </ImageBackground>

        </View>
    );

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size={'large'} color={"#312651"} />
            ) : error ? (
                <Text> Something went Wrong </Text>
            ) : (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.publishedAt}
                    snapToInterval={Dimensions.get('window').width - 20} // Adjust card width and margin as needed
                    decelerationRate="fast"
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    card: {
        width: Dimensions.get('window').width - 20, // Adjust card width and margin as needed
        height: 250, // Adjust card height as needed
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Carousel;
