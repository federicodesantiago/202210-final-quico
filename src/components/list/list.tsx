/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChildProcess } from 'child_process';
import { useContext, useEffect, useState } from 'react';
import { PlaceContext } from '../../core/context/place/place.context';
import { PlaceStructure } from '../../types/place';
import { Item } from '../item/item';

import './list.scss';

export function List() {
    const { places, handleLoad } = useContext(PlaceContext);

    const initialState: Array<PlaceStructure> = places.slice(0, 3);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    const initialNumber = 0;
    const initialNextNumber = initialNumber + 3;

    const [arrayPlaces, setCurrentList] = useState(initialState);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [nextNumber, setNextNumber] = useState(3);

    useEffect(() => {
        setCurrentNumber(currentNumber);
    }, [currentNumber]);

    useEffect(() => {
        setNextNumber(nextNumber);
    }, [nextNumber]);

    // useEffect(() => {
    //     console.log('currentNumber: ', currentNumber);
    //     console.log('nextNumber: ', nextNumber);
    // });

    const handlePagePlus = () => {
        setCurrentNumber(currentNumber + 3);
        setNextNumber(nextNumber + 3);
        const newArrayPlaces = places.slice(currentNumber, nextNumber);
        setCurrentList(newArrayPlaces);
    };

    const handlePageLess = () => {
        setCurrentNumber(currentNumber - 3);
        setNextNumber(nextNumber - 3);
        const newArrayPlacesLess = places.slice(currentNumber, nextNumber);
        setCurrentList(newArrayPlacesLess);
    };

    // console.log('places: ', places);
    // console.log('lenght: ', places.length);

    if (!places.length) {
        return (
            <>
                <p>Loading...</p>
                <p></p>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </>
        );
    } else if (places.length < 4) {
        return (
            <div className="list">
                <ul className="place-list">
                    {places
                        .map((item) => {
                            return (
                                <li key={item.name}>
                                    <Item item={item}></Item>
                                </li>
                            );
                        })
                        .reverse()}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="list">
                <ul className="place-list">
                    {arrayPlaces
                        .map((item) => {
                            return (
                                <li key={item.name}>
                                    <Item item={item}></Item>
                                </li>
                            );
                        })
                        .reverse()}
                </ul>
                <button onClick={handlePagePlus}>Página +</button>
                {currentNumber >= 3 ? (
                    places.length < nextNumber ? (
                        <button onClick={handlePageLess}>Página menos</button>
                    ) : null
                ) : null}
            </div>
        );
    }

    // return (
    //     <>
    //         <div className="list">
    //             <ul className="place-list">
    //                 {items}
    //                 {places.length < 4 ? (
    //                     <button onClick={handlePage}>Página +</button>
    //                 ) : null}
    //             </ul>
    //         </div>
    //     </>
    // );
}
