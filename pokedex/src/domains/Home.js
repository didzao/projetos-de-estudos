import React, { useCallback, useMemo, useState } from 'react';
import SplitScreen from '../components/SplitScreen';
import api from '../services/api';
import { Input } from 'antd';
import logo from "../assets/pokedex-logo.png";
import PokeTag from '../components/PokeTag';
import styles from "./Home.module.scss";

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

    const [initialState, setInitialState] = useState(true);

    const [responseInfo, setResponseInfo] = useState();

    const [ability, setPokeAbility] = useState();

    const [pokeType, setPokeType] = useState();

    const [pokeImage, setPokeImage] = useState();

    const [hasError, setHasError] = useState(false);

    const { Search } = Input;

    const onSearch = useCallback(async (value) => {

        setHasError(false);
        setResponseInfo(undefined);

        try {
            const response = await api.get(`pokemon/${value}`);
            const { data } = response;
            setInitialState(false)
            setResponseInfo(data);
            setPokeAbility(data?.abilities[0]?.ability?.name);
            setPokeType(data?.types[0]?.type?.name);
            setPokeImage(data?.sprites?.other["official-artwork"]["front_default"]);

        } catch (exception) {
            setHasError(true);
            return console.log(exception);
        }

    }, []);

    // const onSearch = useCallback(async (value) => {
    //     setHasError(false);
    //     setResponseInfo(undefined);

    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
    //     const responseBody = await response.json();

    //     if (response.status === 404) {
    //         console.log("ssss")
    //     }

    //     if (!response.ok) {
    //         setHasError(true);
    //         console.log('ERRO:', response);

    //     } else {
    //         setInitialState(false)
    //         setResponseInfo(responseBody);
    //         setPokeAbility(responseBody?.abilities[0]?.ability?.name);
    //         setPokeType(responseBody?.types[0]?.type?.name);
    //         setPokeImage(responseBody?.sprites?.other["official-artwork"]["front_default"]);
    //     }
    // }, []);

    const pokeInfo = useMemo(() => {
        return responseInfo === undefined ? {} : responseInfo;
    }, [responseInfo]);


    const renderLeftSide = () => {
        return (
            <div className={styles.leftContainer}>
                <div className={styles.squirtle}>
                    <img
                        src={require('../assets/squirtle.png').default}
                        alt="squirtle"
                    />
                </div>

                <img
                    src={logo}
                    className={styles.pokedexLogo}
                    alt="Pokédex Logo"
                />

                <Search
                    placeholder="Digite aqui o nome ou número do pokémon"
                    enterButton
                    size="large"
                    onSearch={onSearch}
                    className={styles.input}
                />

                <div className={styles.pikachu}>
                    <img
                        src={require('../assets/pikachu.png').default}
                        alt="pikachu"
                    />
                </div>
            </div>
        );
    };

    const renderPokeInfo = () => {

        return (
            <div className={styles.rightContainer}>
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
                        <LabelInfo label="Peso" info={`${(pokeInfo?.weight) / 10} kg`} />
                        <LabelInfo label="Altura" info={`${(pokeInfo?.height) / 10} m`} />
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
                        src={pokeImage}
                        alt="Imagem do pokemon buscado"
                    />
                </div>
            </div>
        );
    }

    const renderRightSide = () => {

        if (initialState) {
            return (
                <div className={styles.rightLogo}>
                    <img
                        src={require('../assets/who-pokemon.png').default}
                        alt="Logo quem é esse pokémon"
                    />
                </div>
            );
        }

        if (hasError) {
            return (
                <div className={styles.notFound}>
                    <img
                        src={require('../assets/ooops.png').default}
                        alt="Logo quem é esse pokémon"
                    />
                    <img
                        src={require('../assets/pikachu_search.png').default}
                        alt="Logo quem é esse pokémon"
                    />

                    <p>
                        Parece que a pokédex está desatualizada!
                    </p>
                    <span>
                        (Ou então o nome foi digitado com algum erro)
                    </span>
                </div>
            )

        }

        return (
            renderPokeInfo()
        );


    }

    return (
        <SplitScreen
            leftSide={renderLeftSide()}
            rightSide={renderRightSide()}
        />
    )
}

export default Home;
