import { useContext, useEffect } from 'react';
import { PlaceContext } from '../../core/context/place/place.context';
import { PlaceStructure } from '../../types/place';
import { searchDataStructure } from '../../types/searchData.type';
import { Item } from '../item/item';
import './list.scss';

export function ListSearch({
    searchData,
}: {
    searchData: searchDataStructure;
}) {
    const { places, handleLoad } = useContext(PlaceContext);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    const searchStart: Array<PlaceStructure> = places.filter(
        (item) => item.start === searchData.start
    );

    const searchFinish: Array<PlaceStructure> = searchStart.filter(
        (item) => item.finish === searchData.finish
    );

    return (
        <>
            <div className="list">
                {!searchFinish.length ? (
                    <>
                        <p>Lo sentimos.</p>
                        <p>No hay ningún valor</p>
                        <p>que se ajuste a sucriterio.</p>
                    </>
                ) : (
                    <ul className="place-list">
                        {searchFinish
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
