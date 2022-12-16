import { StyleSheet } from "react-native";
import { heightPercentageToDP,widthPercentageToDP,proportionedPixel } from "../../helpers/Style";

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
    },
    loginText: {
        alignItems: 'center',
        marginVertical: heightPercentageToDP('10')
    },
    textIpStyleBar: {
        marginVertical: heightPercentageToDP('3'),
        borderRadius: proportionedPixel(10)
    },
    textIp: {
        width: widthPercentageToDP('75'),
    },
    submitButton: {
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#00FFFF',
        width: proportionedPixel(120),
        alignSelf: 'center',
        marginTop: proportionedPixel(10),
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: proportionedPixel(8),
        marginLeft: proportionedPixel(2)
    },
    icons: {
        height: proportionedPixel(10),
        width: proportionedPixel(10),
        marginHorizontal: proportionedPixel(5)
    },
    submitText: {
        paddingVertical: proportionedPixel(7),
        fontSize: proportionedPixel(10),
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    textInputView: {
        flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderRadius: 30
    },
    lockIcon: {
        height: proportionedPixel(10),
        width: proportionedPixel(10),
        marginHorizontal: proportionedPixel(5)
    }
})

export default styles;