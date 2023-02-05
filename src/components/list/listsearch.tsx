import { useContext, useEffect } from 'react';
import { PlaceContext } from '../../core/context/place/place.context';
import { PlaceStructure } from '../../types/place';
import { Item } from '../item/item';
import './list.scss';

export function ListSearch({
    searchData,
}: {
    searchData: Partial<PlaceStructure>;
}) {
    const { places, handleLoad } = useContext(PlaceContext);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    const searchStart = places.filter(
        (item) => item.start === searchData.start
    );
    const searchFinish = searchStart.filter(
        (item) => item.finish === searchData.finish
    );
    const searchKids = searchFinish.filter(
        (item) => item.forKids === searchData.forKids
    );
    const searchDogs = searchKids.filter(
        (item) => item.forDogs === searchData.forDogs
    );

    return (
        <>
            <div className="list">
                {!searchDogs.length ? (
                    <p>
                        Lo sentimos, no hay ningún valor que se ajuste a su
                        criterio.
                    </p>
                ) : (
                    <ul className="place-list">
                        {searchDogs
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
