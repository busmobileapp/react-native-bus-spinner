import {
    StyleSheet
} from 'react-native';

const containerParent = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
};


const styles = StyleSheet.create({
    activityContainer: {
        ...containerParent
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});

export default styles;