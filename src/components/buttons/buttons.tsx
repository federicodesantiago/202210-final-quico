import { SearchButton } from './search/searchButton';
import './buttons.scss';
import { useState } from 'react';
import { AddButton } from './add/add.button';

export function Buttons() {
    const [modalSearch, setModalSearch] = useState(false);

    const openModalSearch = () => {
        setModalSearch(!modalSearch);
    };

    const [modalAdd, setModalAdd] = useState(false);

    const openModalAdd = () => {
        setModalAdd(!modalAdd);
    };

    return (
        <>
            <div className="buttons_group">
                <button onClick={openModalAdd}>Añadir</button>
                <button onClick={openModalSearch}>Buscador</button>
                {modalSearch ? (
                    <SearchButton
                        openModalSearch={() => {
                            setModalSearch(false);
                        }}
                        modalSearch={modalSearch}
                    />
                ) : null}
                {modalAdd ? (
                    <AddButton
                        openModalAdd={() => {
                            setModalAdd(false);
                        }}
                        modalAdd={modalAdd}
                    />
                ) : null}
            </div>
        </>
    );
}
