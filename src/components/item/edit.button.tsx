import { SyntheticEvent, useContext, useState } from 'react';
import { PlaceStructure } from '../../types/place';
import { PlaceContext } from '../../core/context/place/place.context';

export function EditButton({
    item,
    modalEdit,
    openModalEdit,
}: {
    modalEdit: boolean;
    openModalEdit: () => void;
    item: PlaceStructure;
}) {
    const { handleUpdate } = useContext(PlaceContext);

    const handleClick = () => {
        handleUpdate(item);
    };

    const [updateData, setUpdateData] = useState(item);

    const handleInput = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setUpdateData({ ...updateData, [element.name]: element.value });
    };

    return (
        <>
            <div className="button_edit">
                <div className="black-bg"> </div>
                <section className="edit-content">
                    <h3 className="edit_content_header">Editar</h3>
                    <span></span>
                    <form
                        className="edit-form"
                        autoComplete="off"
                        onSubmit={handleClick}
                    >
                        <div className="edit-content_input">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder={item.name}
                                value={updateData.name}
                                onInput={handleInput}
                                required
                            />
                        </div>
                        <div className="edit_content-dropDown">
                            <div>
                                <select
                                    name="start"
                                    className="edit-form_start"
                                    onClick={handleInput}
                                    id="start"
                                >
                                    <option value=" ">Salida</option>
                                    <option value="Corcubión">Corcubión</option>
                                    <option value="Granada">Granada</option>
                                    <option value="Madrid">Madrid</option>
                                    <option value="Valencia">Valencia</option>
                                </select>
                            </div>
                            <div>
                                <select
                                    name="finish"
                                    className="edit-form_finish"
                                    onClick={handleInput}
                                    id="finish"
                                >
                                    <option value=" ">Llegada</option>
                                    <option value="Corcubión">Corcubión</option>
                                    <option value="Granada">Granada</option>
                                    <option value="Madrid">Madrid</option>
                                    <option value="Valencia">Valencia</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="edit-content_input">
                                <input
                                    type="text"
                                    name="distance"
                                    id="distance"
                                    placeholder={item.distance}
                                    value={updateData.distance}
                                    onInput={handleInput}
                                    required
                                />
                            </div>
                            <div className="edit_content-checker">
                                <div className="checker-item">
                                    <input
                                        type="checkbox"
                                        checked={updateData.forKids}
                                        value="forKids"
                                    />
                                    <label htmlFor="forKids">Niños</label>
                                </div>
                                <div className="checker-item">
                                    <input
                                        type="checkbox"
                                        checked={updateData.forDogs}
                                        value="forDogs"
                                    />
                                    <label htmlFor="forDogs">Perros</label>
                                </div>
                                <div className="checker-item">
                                    <input
                                        type="checkbox"
                                        checked={updateData.away}
                                        value="away"
                                    />
                                    <label htmlFor="away">Desvío</label>
                                </div>
                            </div>
                            <div className="edit-content_input">
                                <input
                                    type="text"
                                    name="coment"
                                    id="coment"
                                    placeholder={item.coment}
                                    value={updateData.coment}
                                    onInput={handleInput}
                                    required
                                />
                            </div>
                            <div className="edit-content_send">
                                <button type="submit">Actualizar</button>
                                <button
                                    onClick={openModalEdit}
                                    className="edit-content_close"
                                >
                                    Terminar actualización
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}
