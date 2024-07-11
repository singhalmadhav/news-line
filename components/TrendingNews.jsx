import { ActivityIndicator, FlatList, Text, View } from "react-native"
import ExpandableCard from "./ExpandableCard";
import useFetch from "../hook/useFetch";

const types = [
    {
        id: "0",
        title: "Stock market today: Stocks end 2023 up 20% for the year as resilient economy energizes investors",
        description: "Stocks slipped on the final trading day of the year, which nonetheless boasted surprisingly robust gains for Wall Street. The benchmark S&P 500 index inched lower Friday but ended 2023 with a 24.2% gain for the year. The Dow Jones Industrial Average rose more…",
        url: "https://www.startribune.com/stock-market-today-stocks-end-2023-up-20-for-the-year-as-resilient-economy-energizes-investors/600331255/",
    },
    {
        id: "1",
        title: "Stock market today: Stocks end 2023 up 20% for the year as resilient economy energizes investors",
        description: "Stocks slipped on the final trading day of the year, which nonetheless boasted surprisingly robust gains for Wall Street. The benchmark S&P 500 index inched lower Friday but ended 2023 with a 24.2% gain for the year. The Dow Jones Industrial Average rose more…",
        url: "https://www.startribune.com/stock-market-today-stocks-end-2023-up-20-for-the-year-as-resilient-economy-energizes-investors/600331255/",
    },
    {
        id: "2",
        title: "Stock market today: Stocks end 2023 up 20% for the year as resilient economy energizes investors",
        description: "Stocks slipped on the final trading day of the year, which nonetheless boasted surprisingly robust gains for Wall Street. The benchmark S&P 500 index inched lower Friday but ended 2023 with a 24.2% gain for the year. The Dow Jones Industrial Average rose more…",
        url: "https://www.startribune.com/stock-market-today-stocks-end-2023-up-20-for-the-year-as-resilient-economy-energizes-investors/600331255/",
    },
    {
        id: "3",
        title: "Stock market today: Stocks end 2023 up 20% for the year as resilient economy energizes investors",
        description: "Stocks slipped on the final trading day of the year, which nonetheless boasted surprisingly robust gains for Wall Street. The benchmark S&P 500 index inched lower Friday but ended 2023 with a 24.2% gain for the year. The Dow Jones Industrial Average rose more…",
        url: "https://www.startribune.com/stock-market-today-stocks-end-2023-up-20-for-the-year-as-resilient-economy-energizes-investors/600331255/",
    }
]

const TrendingNews = () => {
    const { data, isLoading, error, refetch } = useFetch('top-headlines', 'us');

    const renderItem = ({ item }) => (
        <View>
            <ExpandableCard
                title={item.title}
                content={item.content}
                url = {item.url}
            />
        </View>
    );
    return (
        <View style={{ margin: 10}}>
            <Text style={{ fontSize: 20, fontWeight: 800 }}>Trending News</Text>
            {
                isLoading? (
                    <ActivityIndicator size={'large'} color={"#312651"} />
                ): error? (
                    <Text>Something went worng</Text>
                ): (
                    <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.publishedAt}
                />
                )
            }
            
        </View>
    )
}

export default TrendingNews;