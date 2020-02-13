import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
export default class MainActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn1: true,
      btn2: false,
      btn3: false,
      btn4: false,
      urlImage: require("../../../assets/Images/1.jpg"),
      text1: "Bạn chưa có định hướng",
      text2: "Bạn hiện đang phân vân và chưa có định hướng nào cho ngành nghề công việc tương lai, chưa có kế hoạch nào cho tương lai...",
    }
  }
  render() {
    return (
      <>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.btnAdvisory}
            activeOpacity={0.5}
            onPress = {()=>this.props.changeIndexCpn(1)}
          >
            <Text
              style={styles.textInBtn1}
            >
              ĐĂNG KÝ ĐỂ ĐƯỢC TƯ VẤN TRỰC TIẾP
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnTest}
            activeOpacity={0.5}
            onPress = {()=>this.props.changeIndexCpn(3)}
          >
            <Text
              style={styles.textInBtn1}
            >
              TRẮC NGHIỆM TÂM LÝ
              </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: "column",
        }}>
          <View style={{ position: 'relative' }}>
            <Image style={styles.imageSlide} source={this.state.urlImage} />
            <View style={styles.textSlider}>
              <Text style={{ fontWeight: 'bold' }}>{this.state.text1} </Text>
              <Text style={{ textAlign: "justify", fontSize: 13 }}>{this.state.text2}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={this.state.btn1 ? styles.itemBtn1Selected : styles.itemBtn1}
            onPress={() => {
              
              if (!this.state.btn1) {
                this.setState({ btn1: true });
                this.setState({ urlImage: require("../../../assets/Images/1.jpg") });
                this.setState({ text1: "Bạn chưa có định hướng" });
                this.setState({ text2: "Bạn hiện đang phân vân và chưa có định hướng nào cho ngành nghề công việc tương lai, chưa có kế hoạch nào cho tương lai..." });
                if (this.state.btn2) {
                  this.setState({ btn2: false });
                }
                if (this.state.btn3) {
                  this.setState({ btn3: false });
                }
                if (this.state.btn4) {
                  this.setState({ btn4: false });
                }
              }
            }}

          >
            <Text style={styles.textInBtn} > CHƯA ĐỊNH HƯỚNG</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={this.state.btn2 ? styles.itemBtn2Selected : styles.itemBtn2}
            onPress={() => {
              if (!this.state.btn2) {
                this.setState({ btn2: true });
                this.setState({ urlImage: require("../../../assets/Images/2.jpg") });
                this.setState({ text1: "Học ngành gì?" });
                this.setState({ text2: "Chuẩn bị thi đại học nhưng đến bây giờ vẫn chưa xác định được nên chọn ngành nào?" });
                if (this.state.btn1) {
                  this.setState({ btn1: false });
                }
                if (this.state.btn3) {
                  this.setState({ btn3: false });
                }
                if (this.state.btn4) {
                  this.setState({ btn4: false });
                }
              }
            }}

          >
            <Text style={styles.textInBtn} >  HỌC NGÀNH GÌ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={this.state.btn3 ? styles.itemBtn2Selected : styles.itemBtn2}
            onPress={() => {
              if (!this.state.btn3) {
                this.setState({ btn3: true });
                this.setState({ urlImage: require("../../../assets/Images/3.jpg") });
                this.setState({ text1: "Bạn có điểm mạnh nào" });
                this.setState({ text2: "Em năm nay học lớp 12, em còn phân vân không biết điểm mạnh của mình ở tổ hợp môn xét tuyển nào?" });
                if (this.state.btn2) {
                  this.setState({ btn2: false });
                }
                if (this.state.btn1) {
                  this.setState({ btn1: false });
                }
                if (this.state.btn4) {
                  this.setState({ btn4: false });
                }
              }
            }}

          >
            <Text style={styles.textInBtn} > ĐIỂM MẠNH NÀO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={this.state.btn4 ? styles.itemBtn4Selected : styles.itemBtn4}
            onPress={() => {
              if (!this.state.btn4) {
                this.setState({ btn4: true });
                this.setState({ urlImage: require("../../../assets/Images/4.jpg") });
                this.setState({ text1: "Giải pháp" });
                this.setState({ text2: "Chúng tôi xây dựng công cụ hỗ trợ cho các bạn trong việc định hướng ngành nghề của bản thân dựa vào điểm học tập năm học lớp 12." });
                if (this.state.btn2) {
                  this.setState({ btn2: false });
                }
                if (this.state.btn3) {
                  this.setState({ btn3: false });
                }
                if (this.state.btn1) {
                  this.setState({ btn1: false });
                }
              }
            }}

          >
            <Text style={styles.textInBtn} > GIẢI PHÁP</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}