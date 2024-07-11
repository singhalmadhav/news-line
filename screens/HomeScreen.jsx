import { AntDesign, Entypo } from "@expo/vector-icons";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native"
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import TrendingNews from "../components/TrendingNews";

const HomeScreen = () => {
    return (
        <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}>
            <Header />
            <Carousel />
            <Categories />
            <TrendingNews />
        </ScrollView>
    )
}

export default HomeScreen;