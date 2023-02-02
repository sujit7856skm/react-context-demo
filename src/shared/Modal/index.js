import React from 'react';
import { useStyles } from './styles';

export default function CustomModal({ data }) {
    const styles = useStyles();
    const handleOnClose = () => {
        data?.onClose && data?.onClose();
    }
    return (
        <div className={styles.modalContainer}>
            <div className={styles.backDrop} onClick={handleOnClose}></div>
            <div className={styles.bodyContainer}>
                {Boolean(data.component instanceof Function) ? <data.component data={data} /> :
                    data.component}
            </div>
        </div>
    );
}
