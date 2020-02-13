import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    btnAdvisory:{
        backgroundColor: "#00ACEE",
        marginRight: 5,
        marginBottom: 5,
        borderRadius: 10,
        alignItems: "center",
        borderColor:"#000000",
        flex: 60,

    },
    textInBtn1: {
        color: "#000000",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
        
    },
    btnTest:{
        backgroundColor: "#00ACEE",
        marginLeft: 5,
        marginBottom: 5,
        borderRadius: 10,
        alignItems: "center",
        borderColor:"#000000",
        flex: 40,

    },
    imageSlide:{
        width: null,
        resizeMode: 'cover',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textSlider:{
        opacity: 0.7,
        position: 'absolute',
        left: 5,
        bottom: 5,
        width: 250,
        height: 100,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flexDirection: 'column',
        padding: 5,
      },
      itemBtn1Selected:{
        backgroundColor: '#06213F',
        padding: 10,
        borderColor: '#06213F',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderTopWidth: 0,
      },
      itemBtn1:{
        backgroundColor: '#DEDACB',
        padding: 10,
        borderColor: '#06213F',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderTopWidth: 0,
      },
      textInBtn:{
        color: '#666666',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center",
      },
      itemBtn2Selected:{
        backgroundColor: '#06213F',
        padding: 10,
        borderColor: '#06213F',
        borderWidth: 1,
        borderBottomWidth: 0,
      } ,
      itemBtn2: {
        backgroundColor: '#DEDACB',
        padding: 10,
        borderColor: '#06213F',
        borderWidth: 1,
        borderBottomWidth: 0,
      },
      itemBtn4Selected: {
        backgroundColor: '#06213F',
        padding: 10,
        borderColor: '#06213F',
        borderWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      itemBtn4: {
        backgroundColor: '#DEDACB',
        padding: 10,
        borderColor: '#06213F',
        borderWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },

});
export default styles;