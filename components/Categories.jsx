import { FlatList, Image, ScrollView, Text, View } from "react-native"

const types = [
    {
        id: "0",
        url: "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-sports-logo-icon-picture-png-image_4225320.png",
        name: "Sports"
    },
    {
        id: "1",
        url: "https://static.vecteezy.com/system/resources/thumbnails/000/609/739/small/3-19.jpg",
        name: "Finance"
    },
    {
        id: "2",
        url: "https://thumbs.dreamstime.com/z/black-solid-icon-speech-politics-leader-black-solid-icon-speech-politician-logo-politics-leader-146772569.jpg",
        name: "Politics"
    },
    {
        id: "3",
        url: "https://png.pngtree.com/png-clipart/20200710/original/pngtree-medical-health-logo-png-image_4135905.jpg",
        name: "Health"
    },
    {
        id: "4",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hknLJiSux1aG0oOXbchKZehOG67wY7lRjQ&usqp=CAU",
        name: "Entertainment"
    }
]


const Categories = () => {

    const renderItem = ({ item }) => (
        <View style={{ margin: 5, marginTop:10}}>
            <Image
                source={{ uri: item.url }}
                style={{ width: 80, height: 80, borderRadius: 40 }}
            />
            <Text style={{textAlign:'center', marginTop:10, fontWeight: 700}}>{item.name}</Text>
        </View>
    );

    return (
        <View style={{margin: 10}}>
            <Text style={{ fontSize: 20, fontWeight: 800 }}>Top Picks!</Text>
            <FlatList
                data={types}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Categories;