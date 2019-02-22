import React, {PureComponent } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

import styles from './SpinnerStyles';

export default class Spinner extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.activityContainer}>
                <ActivityIndicator animating={true} style={styles.activityIndicator} size="large" color="blue" />
            </View>
        );
    }
}
