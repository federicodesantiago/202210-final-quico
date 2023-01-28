import { Buttons } from '../../components/buttons/buttons';
import { List } from '../../components/list/list';
import { getURL } from '../../components/weather/getURL';
import { Weather } from '../../components/weather/weather';

export default function HomePage() {
    return (
        <>
            {/* {getURL()} */}
            <Weather></Weather>
            <Buttons></Buttons>
            <List></List>
        </>
    );
}
