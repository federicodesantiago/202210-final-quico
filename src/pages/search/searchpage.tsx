import { useParams } from 'react-router-dom';
import { Buttons } from '../../components/buttons/buttons';
import { ListSearch } from '../../components/list/listsearch';
import { Weather } from '../../components/weather/weather';
import { searchDataStructure } from '../../types/searchData.type';

export default function SearchPage() {
    const searchDataParam = useParams();
    const searchData: searchDataStructure = JSON.parse(
        JSON.stringify(searchDataParam)
    );

    return (
        <>
            <Weather></Weather>
            <Buttons></Buttons>
            <ListSearch searchData={searchData}></ListSearch>
        </>
    );
}
