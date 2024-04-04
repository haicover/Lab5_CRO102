import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { selectImage } from "./action";

const SelectedImage = () => {
    const dispatch = useDispatch();
    const selectedImageUri = useSelector(state => state.selectedImageUri);
    const actions = [
        { title: "Select Image", type: "select", options: {} },
    ];

    const onButtonPress = (type, options) => {
        if (type === 'select') {
            launchImageLibrary(options, response => {
                if (!response.didCancel && response.assets.length > 0) {
                    dispatch(selectImage(response.assets[0].uri));
                }
            });
        } 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chọn ảnh từ thư viện</Text>

            <ScrollView>
                <View>
                    {actions.map(({ title, type, options }) => (
                        <TouchableOpacity
                            key={title}
                            onPress={() => onButtonPress(type, options)}>
                            <Text style={{ padding: 10, borderRadius: 10, backgroundColor: 'orange', textAlign: 'center', marginBottom: 10, }}>{title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View>
                    {selectedImageUri && (
                        <Image resizeMode="cover"
                            resizeMethod="scale"
                            source={{ uri: selectedImageUri }}
                            style={styles.image} />
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
    image: {
        width: 300,
        height: 300,
    },
});

export default SelectedImage;
