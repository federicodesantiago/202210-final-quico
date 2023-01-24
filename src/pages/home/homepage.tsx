import { Weather } from '../../components/weather/weather';
import { Buttons } from '../../core/buttons/buttons';

export default function HomePage() {
    return (
        <>
            <Weather></Weather>
            <Buttons></Buttons>
            <h1>HOME PAGE</h1>;
        </>
    );
}
