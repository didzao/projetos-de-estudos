import React from 'react';
import { Input } from 'antd';

import logo from "../../assets/pokedex-logo.png";

// import squirtle from "../../assets/squirtle.png";

import styles from "./styles.module.scss";

const SplitScreen = ({ children }) => {

    const { Search } = Input;

    return (
        <div className={styles.container}>

            <div className={styles.leftSide}>

                <div className={styles.squirtle}>
                    <img
                        src={require('../../assets/squirtle.png').default}
                        alt="squirtle"
                        width={323}
                    />
                </div>

                <img src={logo} className={styles.pokedexLogo} alt="logo" />

                <Search
                    placeholder="Digite aqui o pokémon"
                    enterButton
                    size="large"
                    className={styles.input}
                />

                <div className={styles.pikachu}>
                    <img
                        src={require('../../assets/pikachu.png').default}
                        alt="pikachu"
                        width={323}
                    />
                </div>

            </div>

            <div className={styles.rightSide}>
                {children}
            </div>

        </div>
    )
}

export default SplitScreen;
