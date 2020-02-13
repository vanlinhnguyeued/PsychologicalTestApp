import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Picker,
    TextInput,
} from 'react-native';
import styles from './styles';
import specialized from '../../../data/Specialized';
export default class RegistrationComponent extends Component {
    constructor(props) {
        super(props);
        dataSpecialized = specialized;
        this.state = {
            apiGetAllCity: "https://thongtindoanhnghiep.co/api/city",
            citys: [],
            selectedSpecialized: "Chọn Ngành học cần tư vấn",
            selectedCity: "Chọn tỉnh/ thành phố",
            selectedDistrict: "Chọn huyện/ quận",
            idCity: 0,
            districts: [],

        }
    }

    async getCityFromServer() {
        try {
            let response = await fetch(this.state.apiGetAllCity);
            let responseJson = await response.json();
            return responseJson.LtsItem;

        }
        catch (err) {
            console.error(err);

        }
    }

    async getDistrictFromCity() {
        try {
            let response = await fetch(this.state.apiGetAllCity + '/' + this.state.idCity + '/district');
            let responseJson = await response.json();
            return responseJson;

        }
        catch (err) {
            console.error(err);
        }
    }

    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = async () => {
        this.setState({ citys: await this.getCityFromServer() });
    }
    renderSpecializedItem() {
        items = [];
        for (let item of dataSpecialized) {
            items.push(<Picker.Item key={item} label={item} value={item} />);
        }
        return items;
    }
    renderCityItem() {
        items = [];
        for (let item of this.state.citys) {
            items.push(<Picker.Item key={item.ID} label={item.Title} value={item.ID} />);
        }
        return items;
    }
    renderDistristItem() {
        items = [];
        for (let item of this.state.districts) {
            items.push(<Picker.Item key={item.ID} label={item.Title} value={item.ID} />);
        }
        return items;
    }
    render() {

        return (

            <>

                <View style={styles.picSpecialized}>
                    <Picker
                        style={{ height: 40 }}
                        mode={"dropdown"}
                        selectedValue={this.state.selectedCity}
                        onValueChange={(value) => {
                            this.setState({ selectedCity: value });
                            this.setState({ idCity: value }, async () => { this.setState({ districts: await this.getDistrictFromCity() }); });

                        }}
                    >
                        {this.renderCityItem()}
                    </Picker>

                </View>

                <View style={styles.picSpecialized}>
                    <Picker
                        style={{ height: 40 }}
                        mode={"dropdown"}
                        selectedValue={this.state.selectedDistrict}
                        onValueChange={(value) => {
                            this.setState({ selectedDistrict: value });

                        }}
                    >
                        {this.renderDistristItem()}
                    </Picker>

                </View>
                <View style={styles.picSpecialized}>
                    <TextInput 
                        placeholder = {'Họ và tên *'}
                    />

                </View>
                <View style={styles.picSpecialized}>
                    <TextInput 
                        placeholder = {'Email *'}
                    />

                </View>
                <View style={styles.picSpecialized}>
                    <TextInput 
                        placeholder = {'Số điện thoại *'}
                    />

                </View>
                <View style={styles.picSpecialized}>
                    <Picker
                        style={{ height: 40 }}
                        mode={"dropdown"}
                        selectedValue={this.state.selectedSpecialized}
                        onValueChange={(value) => this.setState({ selectedSpecialized: value })}
                    >
                        {this.renderSpecializedItem()}
                    </Picker>

                </View>
                <TouchableOpacity
                    style = {styles.btnSubmit}
                    onPress = {()=>this.props.changeIndexCpn(2)}
                >
                    <Text style = {styles.textInBtn}>
                        Đăng ký tư vấn
                    </Text>
                </TouchableOpacity>
            </>
        );
    }

}