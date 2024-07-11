import { AntDesign, Entypo } from "@expo/vector-icons";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

const Header = () => {
    return (
    <View style=
        {{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 5,
            padding: 10,
            borderRadius: 12
        }}>
        <Text style= {{ fontSize: 17, fontWeight:"800" }}> News Line </Text>
        <TextInput
            style=
            {{
                width: "60%",
                borderWidth: 1,
                borderRadius: 10,
                fontSize: 15,
                padding: 6,
                borderColor: "#C0C0C0",
                backgroundColor: "#FFFFFF"
            }}
            placeholder="Search"
        />
        <TouchableOpacity>
            <AntDesign name="search1" size={26} color="black" />
        </TouchableOpacity>
        <Entypo name="menu" size={26} color="black" />
    </View>
    )
}

export default Header;