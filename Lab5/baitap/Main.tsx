import { Provider } from "react-redux";

import Header from "./Header";
import Content from "./Content";
import { stote } from "./store";
import List from "./List";
import { View } from "react-native";


function Main(){
    return(
        <Provider store={stote}>
            <View style={{flex:1}}>
                <Header/>
                <Content/>
                <List/>
            </View>
        </Provider>
    )
}
export default Main;