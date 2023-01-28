export function SearchButton({
    modalSearch,
    openModalSearch,
}: {
    modalSearch: boolean;
    openModalSearch: () => void;
}) {
    return (
        <>
            <div className="black-bg"> </div>
            <div className="search_content">
                <h3 className="search_content_header">Buscar</h3>
                <span></span>
                <div className="search_content-dropDown">
                    <select name="start" className="add-form_start" id="start">
                        <option className="texto" value=" ">
                            Salida
                        </option>
                        <option value="Corcubión">Corcubión</option>
                        <option value="Granada">Granada</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Valencia">Valencia</option>
                    </select>
                    <select name="start" className="add-form_start" id="start">
                        <option value=" ">Salida</option>
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
                            checked={false}
                            value="forKids"
                        />
                        <label htmlFor="forKids">Niños</label>
                    </div>
                    <div className="checker-item">
                        <input type="checkbox" value="forDogs" />
                        <label htmlFor="forDogs">Perros</label>
                    </div>
                </div>
                <button onClick={openModalSearch}>Buscador</button>
            </div>
        </>
    );
}
