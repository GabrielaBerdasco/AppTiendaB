import React, { useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from 'react-native-paper';
import { removeAllItems } from '../store/actions/items.action';
import { Colors } from '../constants/Colors';

function AlertContainer() {
    const [visible, setVisible] = useState(false);

    const cartStatus = useSelector(state => state.cart.status);
    const dispatch = useDispatch();

    const onDismissSnackBar = () => {
        setVisible(false);
        dispatch(removeAllItems());
    }

    useEffect(() => {
        if(cartStatus === 'success') {
            setVisible(true);
            /* Alert.alert('Pedido realizado', 'Gracias por su compra', [
                {
                    text: 'OK',
                    onPress: () => {
                        dispatch(removeAllItems())
                    }
                }
            ]) */
        }
    }, [cartStatus])

    return (
        <>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                style={styles.snackbar}
                action={{
                    color: Colors.textColor,
                    label: 'OK',
                }}>
                ¡Pedido realizado! Gracias por su compra.
            </Snackbar>
        </>
    )
}

const styles = StyleSheet.create({
    snackbar: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: Colors.accent,
        padding: 10
    },
  });

export default AlertContainer;