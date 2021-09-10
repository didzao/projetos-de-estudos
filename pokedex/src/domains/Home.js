import React, { useCallback, useMemo, useState } from 'react';
import SplitScreen from '../components/SplitScreen';
import styles from "./Home.module.scss";
import api from '../services/api';

import { Input } from 'antd';

import logo from "../assets/pokedex-logo.png";
import PokeTag from '../components/PokeTag';

const LabelInfo = ({ label, info }) => {
    return (
        <div className={styles.labelInfo}>
            <span>
                {label}
            </span>
            <p>
                {info}
            </p>
        </div>
    );
};

const Home = () => {

    const pikachu = require('../assets/pikachu.png').default;

    const [initialState, setInitialState] = useState(true);

    const [responseInfo, setResponseInfo] = useState();

    const [ability, setPokeAbility] = useState();

    const [pokeType, setPokeType] = useState(initialState)

    const { Search } = Input;

    // const onSearch = useCallback(async (value) => {
    //     // console.log(value);

    //     try {
    //         const response = await api.get(`${value}`);

    //         setResponseInfo(response.data);

    //     } catch (exception) {
    //         return console.log(exception);
    //     }

    // }, []);

    const onSearch = useCallback(async (value) => {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const responseBody = await response.json();


        if (!response.ok) {
            console.log('ERRO:', response);
        } else {
            setInitialState(false)
            setResponseInfo(responseBody);
            setPokeAbility(responseBody?.abilities[0]?.ability.name);
            setPokeType(responseBody?.types[0]?.type.name)
            console.log([responseBody]);
        }
    }, []);

    const pokeInfo = useMemo(() => {
        return responseInfo === undefined ? {} : responseInfo;
    }, [responseInfo]);


    const renderLeftSide = () => {
        return (
            <>
                <div className={styles.squirtle}>
                    <img
                        src={require('../assets/squirtle.png').default}
                        alt="squirtle"
                        width={323}
                    />
                </div>

                <img src={logo} className={styles.pokedexLogo} alt="logo" />

                <Search
                    placeholder="Digite aqui o pokémon"
                    enterButton
                    size="large"
                    onSearch={onSearch}
                    className={styles.input}
                />

                <div className={styles.pikachu}>
                    <img
                        src={require('../assets/pikachu.png').default}
                        alt="pikachu"
                        width={323}
                    />
                </div>
            </>
        );
    };

    const renderPokeInfo = () => {
        return (
            <>
                <div className={styles.headerContainer}>
                    <h1>
                        {pokeInfo?.name}
                    </h1>
                    <span>
                        Nº {pokeInfo?.id}
                    </span>
                </div>

                <p className={styles.infoText}>
                    It can freely recombine its own cellular structure
                    to transform into other life-forms.
                </p>

                <div className={styles.cardContainer}>
                    <div className={styles.row}>
                        <LabelInfo label="Peso" info={`${pokeInfo?.weight} kg`} />
                        <LabelInfo label="Altura" info={`0.${pokeInfo?.height} m`} />
                        <LabelInfo label="Habilidade" info={ability} />
                    </div>

                    <div className={styles.row}>
                        <PokeTag label="Tipo" pokeType={pokeType} />
                        <PokeTag label="Fraqueza" tagType="strong" pokeType={pokeType} />
                        <PokeTag label="Forte contra" tagType="weakness" pokeType={pokeType} />
                    </div>

                </div>

                <div className={styles.pokeImage}>
                    <img
                        src={pikachu}
                        alt="pikachu"
                        width={323}
                    />
                </div>
            </>
        );
    }

    const renderRightSide = () => {

        if (initialState) {
            return (
                <div className={styles.rightLogo}>
                    <img
                        src={require('../assets/who-pokemon.png').default}
                        alt="Logo quem é esse pokémon"
                        width={550}
                    />
                </div>
            );
        } else {
            return (
                renderPokeInfo()
            );
        }

    }

    return (
        <SplitScreen
            leftSide={renderLeftSide()}
            rightSide={renderRightSide()}
        />
    )
}

export default Home;
