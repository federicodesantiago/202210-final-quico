import { useContext, useEffect } from 'react';
import { PlaceContext } from '../../core/context/place/place.context';
import { Item } from '../item/item';
import './list.scss';

export function List() {
    const { places, handleLoad } = useContext(PlaceContext);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);
    return (
        <>
            <div className="list">
                {!places.length ? (
                    <p>Loading...</p>
                ) : (
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
                )}
            </div>
        </>
    );
}
