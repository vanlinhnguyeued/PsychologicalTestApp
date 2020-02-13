import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import SliderComponent from './SliderComponent/Slidercomponent';
import RegistrationComponent from './RegistrationComponent/RegistrationComponent';
import SuccessRegistration from './RegistrationComponent/SuccessRegistration';
import ReadyComponent from '../MainActivity/TestCompnent/ReadyComponent'
export default class MainActivity extends Component {
  constructor(props) {

    super(props);
    this.state = {
      indexCpn : 0,
    };
  }
  
  changeComponent(){
      switch(this.state.indexCpn){
        case 0: {
          return <SliderComponent changeIndexCpn = {(index)=>this.changeIndexCpn(index)}/>;
        }
        case 1:{
          return <RegistrationComponent changeIndexCpn = {(index)=>this.changeIndexCpn(index)}/>;
        }
        case 2:{
          return <SuccessRegistration/>;
        }
        case 3:{
          return <ReadyComponent/>
        }
      }
  }
  changeIndexCpn(index){
    this.setState({indexCpn:index});
  }
  render() {
    
    return (
      <>
        <ScrollView
          style={styles.scrollView}
        >
          <Text
            style={styles.h1}>
            TRẮC NGHIỆM TÂM LÝ - LỰA CHỌN ĐÚNG NGÀNH
          </Text>
          <Text
            style={styles.h2}
          >
            Trường Đại học Sư Phạm - Đại học Đà Nẵng. {"\n"}
            459 Tôn Đức Thắng, Q.Liên Chiểu, TP. Đà Nẵng
          </Text>
          <View style={styles.slider} >
            {this.changeComponent()}
          </View>
          <View style={styles.slider} >
            <TouchableOpacity style={{ flexDirection: "column", marginBottom: 20, }}>
              <Image
                style={styles.imgWM}
                source={require('../../assets/Images/worldmap.png')}
              />
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Trường Đại học Sư phạm - ĐH Đà Nẵng </Text>
              <Text style={{ fontSize: 13 }}> 459 Tôn Đức Thắng, Q. Liên Chiểu, TP. Đà Nẵng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContact}>
              <Image
                style={styles.imgContact}
                source={require('../../assets/Icons/phone.png')}
              />
              <Text style={styles.textContact}>0898 204 204</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContact}>
              <Image
                style={styles.imgContact}
                source={require('../../assets/Icons/mail.png')}
              />
              <Text style={styles.textContact}>hotroqlht@ued.udn.vn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContact}>
              <Image
                style={styles.imgContact}
                source={require('../../assets/Icons/homepage.png')}
              />
              <Text style={styles.textContact}>http://tuyensinh.ued.udn.vn</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: 20, fontSize: 15 }}>
              Hỗ trợ Tư vấn hướng nghiệp cho các bạn học sinh trên toàn quốc.
            </Text>
            <Image
              style={{
                width: null,
                resizeMode: 'cover',
                height: 120,
                marginTop: 20,
                marginLeft: 40
              }}
              source={require('../../assets/Images/DDS.png')}
            />

          </View>
          <Text style={{ textAlign: "center", fontSize: 13, color: "#55ABDA", marginTop: 50 }}>
            Copyright © 2019 - All Rights Reserved
            </Text>
          <Text style={{ textAlign: "center", fontSize: 13, color: "#55ABDA", marginBottom: 20 }}>
            Trường Đại học Sư phạm - Đại học Đà Nẵng
            </Text>
        </ScrollView>
      </>
    );
  }
}