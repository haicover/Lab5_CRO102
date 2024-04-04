import React from "react";

import { useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "./store";
import { Button, StyleSheet, Text, View } from "react-native";


const Content = () => {
    const dispatch = useDispatch();
    const handleAddItem = () => {
        const newItem = { id: Math.random(), name: 'Sản phẩm mới' };
        dispatch(addItem(newItem));
    }

    function handleRemoveItem() {
        dispatch(clearCart())
    }


    function handleDeleteItem() {
        dispatch(removeItem({ id: 2 }))
        
    }
    return (
        <View style={styles.container}>
            <Button title="Thêm vào giỏ hàng" onPress={handleAddItem} />
            <Text>-----------------------------------------------</Text>
            <Button title="Clear giỏ hàng" onPress={handleRemoveItem} />
            <Text>-----------------------------------------------</Text>
            <Button title="Delete giỏ hàng" onPress={handleDeleteItem} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

})

export default Content;