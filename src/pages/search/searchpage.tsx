import { Buttons } from '../../components/buttons/buttons';
import { ListSearch } from '../../components/list/listsearch';
import { Weather } from '../../components/weather/weather';
import { MenuItems } from '../../types/menu';
import { PlaceStructure } from '../../types/place';

export default function SearchPage({
    items,
    searchData,
}: {
    items: MenuItems;
    searchData: Partial<PlaceStructure>;
}) {
    return (
        <>
            <Weather></Weather>
            <Buttons></Buttons>
            <ListSearch searchData={searchData}></ListSearch>
            <p>SEARCH PAGE</p>
        </>
    );
}
