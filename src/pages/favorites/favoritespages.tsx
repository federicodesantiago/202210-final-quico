import { useContext, useEffect } from 'react';
import { PlaceContext } from '../../core/context/place/place.context';
import '../../components/list/list.scss';
import { Item } from '../../components/item/item';

export default function FavoritesPage() {
    const { places, handleLoad } = useContext(PlaceContext);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    const placesFav = places.filter((item) => item.isFavorite);

    return (
        <>
            <div className="list">
                {!placesFav.length ? (
                    <p>Ahora mismo no hay favoritos</p>
                ) : (
                    <ul className="place-list">
                        {placesFav
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
