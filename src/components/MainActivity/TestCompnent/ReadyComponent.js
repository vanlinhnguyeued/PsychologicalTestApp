import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
export default class ReadyComponent extends Component {
    render() {
        return (
            <View>
                <Text
                    style={{
                        fontWeight: "bold",
                        textAlign: 'center',
                        fontSize: 20,
                        color: '#06213F',
                        margin: 20,
                        borderBottomWidth: 1,
                    }}
                >TRẮC NGHIỆM TÂM LÝ - LỰA CHỌN ĐÚNG NGÀNH
                        THEO LÝ THUYẾT JONH HOLLAND</Text>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 15,
                        color: '#06213F',
                        marginBottom: 20,
                    }}>Đây là những câu trắc nghiệm tâm lý vì vậy nó phụ thuộc khá nhiều
                    vào tâm trạng hiện tại của học sinh, nếu học sinh đang quá vui, buồn, căng thẳng,
                    phấn khích thì không nên làm. Hãy làm bài khi tâm trạng bình thường nhất.
                     Phải trung thực và suy nghĩ thật kỹ trước khi trả lời, không nên chọn theo lý tưởng
                    hay vì tác động của mọi người xung quanh.</Text>
                <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#00ACEE', borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: 'center', padding: 10 }}>
                        Tôi đã sẵn sàng, bắt đầu!
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}