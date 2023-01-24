import { AddButton } from './add/add.button';
import { SearchButton } from './search/searchButton';
import './buttons.scss';

export function Buttons() {
    return (
        <>
            <div className="buttons_Group">
                <AddButton></AddButton>
                <SearchButton></SearchButton>
            </div>
        </>
    );
}
