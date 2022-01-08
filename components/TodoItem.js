import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem ({ item, pressHandler }) {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text>{item.text}</Text>
                <TouchableOpacity onPress={() => pressHandler(item.key)}>
                    <MaterialIcons name='delete' size={24} color='#333'/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
});
