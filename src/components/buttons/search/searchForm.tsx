import { SyntheticEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlaceContext } from '../../../core/context/place/place.context';
import { MenuItems } from '../../../types/menu';
import { PlaceStructure } from '../../../types/place';

export const searchFormData: Partial<PlaceStructure> = {
    name: '',
    start: '',
    finish: '',
    distance: '',
    image: '',
    away: false,
    forKids: false,
    forDogs: false,
    coment: '',
};
export function SearchForm({
    items,
    modalSearch,
    toggleModalSearch,
}: {
    items: MenuItems;
    modalSearch: boolean;
    toggleModalSearch: () => void;
}) {
    const { handleUpdate } = useContext(PlaceContext);

    const navigate = useNavigate();

    const handleChangeKids = () => {
        searchData.forKids = !searchData.forKids;
        handleUpdate(searchData);
    };

    const handleChangeDogs = () => {
        searchData.forDogs = !searchData.forDogs;
        handleUpdate(searchData);
    };

    const [searchData, setSearchData] = useState(searchFormData);

    const handleInput = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const element = ev.target as HTMLFormElement;
        setSearchData({ ...searchData, [element.name]: element.value });
    };

    const handleClick = () => {
        toggleModalSearch();
        navigate(items[2].path);
    };
    return (
        <>
            <div className="black-bg"> </div>
            <div className="search_content">
                <h3 className="search_content_header">Buscar</h3>
                <span></span>
                <form>
                    <div className="search_content-dropDown">
                        <select
                            name="start"
                            className="add-form_start"
                            onChange={handleInput}
                            id="start"
                            required
                        >
                            <option className="texto" value=" ">
                                Salida
                            </option>
                            <option value="Corcubión">Corcubión</option>
                            <option value="Granada">Granada</option>
                            <option value="Madrid">Madrid</option>
                            <option value="Valencia">Valencia</option>
                        </select>
                        <select
                            name="finish"
                            className="add-form_finish"
                            onChange={handleInput}
                            id="finish"
                            required
                        >
                            <option value=" ">Llegada</option>
                            <option value="Corcubión">Corcubión</option>
                            <option value="Granada">Granada</option>
                            <option value="Madrid">Madrid</option>
                            <option value="Valencia">Valencia</option>
                        </select>
                    </div>
                    <div className="search_content-checker">
                        <div className="checker-item">
                            <input
                                type="checkbox"
                                value="forKids"
                                id="forKids"
                                onChange={handleChangeKids}
                                defaultChecked={searchData.forKids}
                            />
                            <label htmlFor="forKids">Niños</label>
                        </div>
                        <div className="checker-item">
                            <input
                                type="checkbox"
                                value="forDogs"
                                id="forDogs"
                                onChange={handleChangeDogs}
                                defaultChecked={searchData.forDogs}
                            />
                            <label htmlFor="forDogs">Perros</label>
                        </div>
                    </div>
                    <button onClick={handleClick} type="submit">
                        {items[2].label}
                    </button>
                </form>
            </div>
        </>
    );
}
