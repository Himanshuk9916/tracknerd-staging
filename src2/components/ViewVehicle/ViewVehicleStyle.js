import { StyleSheet } from "react-native";
import { proportionedPixel } from "../../helpers/Style";

const styles = StyleSheet.create({
    mainView: {
        borderRadius: 30,
        padding: proportionedPixel(5),
        marginVertical: proportionedPixel(5),
        marginHorizontal: proportionedPixel(5),
        backgroundColor: 'white',
        elevation: proportionedPixel(10),
        shadowColor: '#9933FF'
    },
    registerView: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    registerText: {
        fontWeight: 'bold',
        fontSize: proportionedPixel(10),
        color: 'black'
    },
    baseView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: proportionedPixel(5),
        marginVertical: proportionedPixel(10)
    },
    typeNfuelText: {
        fontWeight: 'bold',
        fontSize: proportionedPixel(9),
        color: 'black'
    },
    imageView: {
        height: proportionedPixel(20),
        width: proportionedPixel(20)
    },
    allIcons: {
        height: proportionedPixel(15),
        width: proportionedPixel(15)
    }
})

export default styles;