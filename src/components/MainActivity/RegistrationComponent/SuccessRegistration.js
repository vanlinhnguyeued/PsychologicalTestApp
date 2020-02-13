import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from './styles';
export default class SuccessRegistration extends Component {

    render() {
        return (
            <View>
                <Text style={styles.h1}>BẠN ĐÃ ĐĂNG KÝ THÀNH CÔNG</Text>
                <Text style={styles.h2}>Trường Đại học Sư phạm - ĐH Đà Nẵng đã nhận được thông tin đề nghị tư vấn cho bạn.{'\n'}
                    Chúng tôi sẽ xử lý và có những tư vấn sớm nhất đến bạn qua Email, Số Điện thoại của bạn.</Text>
                <Text style={styles.h2}>Bạn có thể tham khảo Trang tư vấn tuyển sinh 2019 của Nhà trường</Text>
                <TouchableOpacity>
                    <Image
                        style={{borderRadius: 10,
                            width: null,
                            resizeMode: 'cover',
                            height: 50,
                        }}
                        source={require("../../../assets/Images/tuvants.jpg")}
                    />
                </TouchableOpacity>

            </View>
        )
    }
}