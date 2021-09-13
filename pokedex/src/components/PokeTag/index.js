import React, { useCallback, useMemo } from 'react';

import styles from "./styles.module.scss";

const PokeTag = ({ pokeType, tagType, label }) => {

    const getPokeType = useCallback(() => {
        let typeTagStyle;
        let typeName;

        let pokeWeak;
        let pokeWeakStyle;

        let pokeStrong;
        let pokeStrongStyle;


        switch (pokeType) {
            case 'steel':
                typeTagStyle = styles.steel;
                typeName = "Aço";
                pokeWeak = "Aço";
                pokeWeakStyle = styles.steel;
                pokeStrong = "Pedra";
                pokeStrongStyle = styles.rock;
                break;
            case 'fighting':
                typeTagStyle = styles.fighting;
                typeName = "Lutador";
                pokeWeak = "Voador";
                pokeWeakStyle = styles.flying;
                pokeStrong = "Normal";
                pokeStrongStyle = styles.normal;
                break;
            case 'flying':
                typeTagStyle = styles.flying;
                typeName = "Voador";
                pokeWeak = "Pedra";
                pokeWeakStyle = styles.rock;
                pokeStrong = "Lutador";
                pokeStrongStyle = styles.fighting;
                break;
            case 'poison':
                typeTagStyle = styles.poison;
                typeName = "Venenoso";
                pokeWeak = "Venenoso";
                pokeWeakStyle = styles.poison;
                pokeStrong = "Planta";
                pokeStrongStyle = styles.grass;
                break;
            case 'ground':
                typeTagStyle = styles.ground;
                typeName = "Terra";
                pokeWeak = "Voador";
                pokeWeakStyle = styles.flying;
                pokeStrong = "Venenoso";
                pokeStrongStyle = styles.poison;
                break;
            case 'rock':
                typeTagStyle = styles.rock;
                typeName = "Pedra";
                pokeWeak = "Lutador";
                pokeWeakStyle = styles.fighting;
                pokeStrong = "Voador";
                pokeStrongStyle = styles.flying;
                break;
            case 'bug':
                typeTagStyle = styles.bug;
                typeName = "Inseto";
                pokeWeak = "Lutador";
                pokeWeakStyle = styles.fighting;
                pokeStrong = "Planta";
                pokeStrongStyle = styles.grass;
                break;
            case 'ghost':
                typeTagStyle = styles.ghost;
                typeName = "Fantasma";
                pokeWeak = "Normal";
                pokeWeakStyle = styles.normal;
                pokeStrong = "Fantasma";
                pokeStrongStyle = styles.ghost;
                break;
            case 'fire':
                typeTagStyle = styles.fire;
                typeName = "Fogo";
                pokeWeak = "Pedra";
                pokeWeakStyle = styles.rock;
                pokeStrong = "Inseto";
                pokeStrongStyle = styles.bug;
                break;
            case 'water':
                typeTagStyle = styles.water;
                typeName = "Água";
                pokeWeak = "Água";
                pokeWeakStyle = styles.water;
                pokeStrong = "Terra";
                pokeStrongStyle = styles.ground;
                break;
            case 'grass':
                typeTagStyle = styles.grass;
                typeName = "Planta";
                pokeWeak = "Voador";
                pokeWeakStyle = styles.flying;
                pokeStrong = "Terra";
                pokeStrongStyle = styles.ground;
                break;
            case 'electric':
                typeTagStyle = styles.electric;
                typeName = "Elétrico";
                pokeWeak = "Terra";
                pokeWeakStyle = styles.ground;
                pokeStrong = "Voador";
                pokeStrongStyle = styles.flying;
                break;
            case 'psychic':
                typeTagStyle = styles.psychic;
                typeName = "Psíquico";
                pokeWeak = "Aço";
                pokeWeakStyle = styles.steel;
                pokeStrong = "Lutador";
                pokeStrongStyle = styles.fighting;
                break;
            case 'ice':
                typeTagStyle = styles.ice;
                typeName = "Gelo";
                pokeWeak = "Aço";
                pokeWeakStyle = styles.steel;
                pokeStrong = "Voador";
                pokeStrongStyle = styles.flying;
                break;
            case 'dragon':
                typeTagStyle = styles.dragon;
                typeName = "Dragão";
                pokeWeak = "Aço";
                pokeWeakStyle = styles.steel;
                pokeStrong = "Dragão";
                pokeStrongStyle = styles.dragon;
                break;
            case 'fairy':
                typeTagStyle = styles.fairy;
                typeName = "Fada";
                pokeWeak = "Venenoso";
                pokeWeakStyle = styles.poison;
                pokeStrong = "Lutador";
                pokeStrongStyle = styles.fighting;
                break;
            case 'dark':
                typeTagStyle = styles.dark;
                typeName = "Dark";
                pokeWeak = "Lutador";
                pokeWeakStyle = styles.fighting;
                pokeStrong = "Fantasma";
                pokeStrongStyle = styles.ghost;
                break;
            case "normal":
            default:
                typeTagStyle = styles.normal;
                typeName = "Normal";
                pokeWeak = "Pedra";
                pokeWeakStyle = styles.rock;
                pokeStrong = "Nenhum";
                pokeStrongStyle = styles.none;
        }

        return {
            typeTagStyle, typeName, pokeWeak,
            pokeWeakStyle, pokeStrong, pokeStrongStyle,
        };
    }, [pokeType]);

    const tagStyles = useMemo(() => {
        if (tagType === "weakness") {
            return getPokeType().pokeWeakStyle;
        } else if (tagType === "strong") {
            return getPokeType().pokeStrongStyle;
        } else {
            return getPokeType().typeTagStyle;
        }
    }, [getPokeType, tagType]);

    const renderTagLabel = () => {
        if (tagType === "weakness") {
            return getPokeType().pokeWeak;
        } else if (tagType === "strong") {
            return getPokeType().pokeStrong;
        } else {
            return getPokeType().typeName;
        }
    };

    return (
        <div className={styles.labelInfo}>
            <span>
                {label}
            </span>
            <div className={tagStyles}>
                <span>
                    {renderTagLabel()}
                </span>
            </div>
        </div>
    )
};

export default PokeTag;
