import React from 'react';

import styles from "./styles.module.scss";

const SplitScreen = ({ leftSide, rightSide }) => {

    return (
        <div className={styles.container}>

            <div className={styles.leftSide}>
                {leftSide}
            </div>

            <div className={styles.rightSide}>
                {rightSide}
            </div>

        </div>
    )
}

export default SplitScreen;
