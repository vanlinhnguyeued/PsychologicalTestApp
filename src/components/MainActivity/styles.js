import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#06213F",
        flex: 1,
        flexDirection: "column",
    },
    h1: {
        color: "#F9F9F9",
        fontSize: 36,
        fontWeight: "normal",
        fontFamily: "sans-serif",
        textAlign: "center"
    },
    h2: {
        textAlign: "center",
        color: "#979797",
    }, 
    slider:{
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        flexDirection: 'column', 
    },
    
      imgWM: {
        width: null,
        resizeMode: 'cover',
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

      },
      btnContact:{
        flexDirection: "row", height: 20, marginTop: 10, width: 200 ,
      },
      imgContact: { height: 20, width: 20 },
      textContact:{ flex: 80, marginLeft: 20, fontSize: 15 },




});
export default styles;