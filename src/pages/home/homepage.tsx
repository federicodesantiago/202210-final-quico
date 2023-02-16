import { useContext, useEffect } from 'react';
import { Buttons } from '../../components/buttons/buttons';
import { List } from '../../components/list/list';
import { Weather } from '../../components/weather/weather';
import { PlaceContext } from '../../core/context/place/place.context';

export default function HomePage() {
    const { handleLoad } = useContext(PlaceContext);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <Weather></Weather>
            <Buttons></Buttons>
            <List></List>
        </>
    );
}
