import React from "react";

import { useSelector } from "react-redux";

import { StyleSheet, Text, View } from "react-native";


const Header = () => {
    const cartItem = useSelector((state) => state.cart.items);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Giỏ hàng
            </Text>
            <Text style={styles.cartCount}>
                Sản phẩm:{cartItem.length}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f3f3f3'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    cartCount: {
        marginTop: 5,
    }
})

export default Header;


