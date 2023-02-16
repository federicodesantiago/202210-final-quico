import { SyntheticEvent, useContext, useState } from 'react';
import { PlaceStructure } from '../../../types/place';
import { PlaceContext } from '../../../core/context/place/place.context';
import { useNavigate } from 'react-router-dom';
import { items } from '../../../core/App/App';

export function AddButton({
    modalAdd,
    toggleModalAdd,
}: {
    modalAdd: boolean;
    toggleModalAdd: () => void;
}) {
    const initialFormData: Partial<PlaceStructure> = {
        name: '',
        start: '',
        finish: '',
        distance: '',
        image: 'https://firebasestorage.googleapis.com/v0/b/stop-y-go.appspot.com/o/estacion01.webp?alt=media&token=309517a5-e0c3-4529-8d50-738866e7484e',
        away: false,
        forKids: false,
        forDogs: false,
        coment: '',
    };

    const { handleAdd, handleUpdate, handleLoad } = useContext(PlaceContext);
    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };
    const navigate = useNavigate();
    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(
            new PlaceStructure(
                formData.name as string,
                formData.start as string,
                formData.finish as string,
                formData.distance as string,
                formData.image as string,
                formData.away as boolean,
                formData.forKids as boolean,
                formData.forDogs as boolean,
                formData.coment as string
            )
        );
        setFormData(initialFormData);
        toggleModalAdd();
        handleLoad();
        window.location.reload();
        navigate(items[0].path);
    };

    const handleChangeKids = () => {
        formData.forKids = !formData.forKids;
        handleUpdate(formData);
    };

    const handleChangeDogs = () => {
        formData.forDogs = !formData.forDogs;
        handleUpdate(formData);
    };

    const handleChangeAway = () => {
        formData.away = !formData.away;
        handleUpdate(formData);
    };

    return (
        <>
            <div className="black-bg"> </div>
            <section className="add-content">
                <h3 className="add_content_header">Añadir</h3>
                <span></span>
                <form
                    className="add-form"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <div className="add-content_input">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="add_content-dropDown">
                        <div>
                            <select
                                name="start"
                                className="add-form_start"
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
                                className="add-form_finish"
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
                        <div className="add-content_input">
                            <input
                                type="text"
                                name="distance"
                                id="distance"
                                placeholder="Distancia"
                                value={formData.distance}
                                onInput={handleInput}
                                required
                            />
                        </div>
                        <div className="add_content-checker">
                            <div className="checker-item">
                                <input
                                    type="checkbox"
                                    value="forKids"
                                    onChange={handleChangeKids}
                                    defaultChecked={formData.forKids}
                                />
                                <label htmlFor="forKids">Niños</label>
                            </div>
                            <div className="checker-item">
                                <input
                                    type="checkbox"
                                    value="forDogs"
                                    onChange={handleChangeDogs}
                                    defaultChecked={formData.forDogs}
                                />
                                <label htmlFor="forDogs">Perros</label>
                            </div>
                            <div className="checker-item">
                                <input
                                    type="checkbox"
                                    value="away"
                                    onChange={handleChangeAway}
                                    defaultChecked={formData.away}
                                />
                                <label htmlFor="away">Desvío</label>
                            </div>
                        </div>
                        <div className="add-content_input">
                            <input
                                type="text"
                                name="coment"
                                id="coment"
                                placeholder="Comentario"
                                value={formData.coment}
                                onInput={handleInput}
                                required
                            />
                        </div>
                        <div>
                            <button type="submit">Añadir</button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}
