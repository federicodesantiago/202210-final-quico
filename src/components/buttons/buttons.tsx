import { SearchForm } from './search/searchForm';
import './buttons.scss';
import { useContext, useState } from 'react';
import { AddButton } from './add/add.button';
import { UserContext } from '../../core/context/place/place.context';
import { items } from '../../core/App/App';

export function Buttons() {
    const { user } = useContext(UserContext);
    const [modalSearch, setModalSearch] = useState(false);

    const toggleModalSearch = () => {
        setModalSearch(!modalSearch);
    };

    const [modalAdd, setModalAdd] = useState(false);

    const toggleModalAdd = () => {
        setModalAdd(!modalAdd);
    };

    return (
        <>
            <div className="buttons_group">
                {localStorage.userStore ? (
                    <>
                        <button onClick={toggleModalAdd}>Añadir</button>
                        <button onClick={toggleModalSearch}>Buscador</button>
                    </>
                ) : (
                    <button onClick={toggleModalSearch} id="BigSearchButton">
                        Buscador
                    </button>
                )}

                {modalSearch ? (
                    <SearchForm
                        items={items}
                        toggleModalSearch={() => {
                            setModalSearch(false);
                        }}
                        modalSearch={modalSearch}
                    />
                ) : null}
                {modalAdd ? (
                    <AddButton
                        toggleModalAdd={() => {
                            setModalAdd(false);
                        }}
                        modalAdd={modalAdd}
                    />
                ) : null}
            </div>
        </>
    );
}
