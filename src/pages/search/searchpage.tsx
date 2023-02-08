import { useParams } from 'react-router-dom';
import { Buttons } from '../../components/buttons/buttons';
import { ListSearch } from '../../components/list/listsearch';
import { Weather } from '../../components/weather/weather';
import { MenuItems } from '../../types/menu';

export default function SearchPage({ items }: { items: MenuItems }) {
    const searchDataParam = useParams();
    console.log('searchData: ', searchDataParam);
    console.log(searchDataParam.start);
    const searchData = {};
    return (
        <>
            <Weather></Weather>
            <Buttons></Buttons>
            <ListSearch searchData={searchData}></ListSearch>
            <p>SEARCH PAGE</p>
        </>
    );
}
