import { Buttons } from '../../components/buttons/buttons';
import { List } from '../../components/list/list';
import { Weather } from '../../components/weather/weather';

export default function HomePage() {
    return (
        <>
            <Weather></Weather>
            <Buttons></Buttons>
            <List></List>
        </>
    );
}
