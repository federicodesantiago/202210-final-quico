import { useContext, useState } from 'react';
import { PlaceContext } from '../../core/context/place/place.context';
import { PlaceStructure } from '../../types/place';
import { EditForm } from './editForm';
import './item.scss';

export function Item({ item }: { item: PlaceStructure }) {
    const { handleUpdate, handleDelete } = useContext(PlaceContext);

    const handleClick = () => {
        handleDelete(item.id);
    };

    const handleClickFav = () => {
        item.isFavorite = !item.isFavorite;
        handleUpdate(item);
    };

    const [modalEdit, setModalEdit] = useState(false);

    const toggleModalEdit = () => {
        setModalEdit(!modalEdit);
        handleUpdate(item);
    };

    return (
        <section className="item">
            <div className="item_img">
                <img
                    className="item_img-item"
                    src="./assets/item/estacion01.webp"
                    alt="Estación de servicio"
                />
            </div>
            <div className="item_info">
                <ul className="item_info-list">
                    <li className="item_info-nombre">{item.name}</li>
                    <li>
                        {item.start} - {item.finish}
                    </li>
                    <li>Desvío: {item.away}</li>
                    <li>Distancia: {item.distance}</li>
                    <li>{item.coment}</li>
                </ul>
            </div>
            <div className="item_icons">
                <div className="items_icons_top">
                    {item.forKids ? (
                        <img
                            className="items_icons_top-kid"
                            src="./assets/item/kid_icon.webp"
                            alt="Icono niño"
                        />
                    ) : (
                        <span></span>
                    )}
                    {item.forDogs ? (
                        <img
                            className="items_icons_top-dog"
                            src="./assets/item/dog_icon.webp"
                            alt="Icono perro"
                        />
                    ) : (
                        <span></span>
                    )}
                </div>
                <div className="items_icons_bottom">
                    <img
                        className="items_icons_bottom-edit"
                        src="./assets/item/edit_icon_12.webp"
                        alt="Icono edit"
                        onClick={toggleModalEdit}
                    />
                    {modalEdit ? (
                        <EditForm
                            item={item}
                            toggleModalEdit={() => {
                                toggleModalEdit();
                            }}
                            modalEdit={modalEdit}
                        />
                    ) : null}
                    <button
                        type="button"
                        className="items_icons_bottom-fav"
                        onClick={handleClickFav}
                        data-testid="bottom-fav"
                    >
                        {item.isFavorite ? (
                            <img
                                src="./assets/item/favoriteNOT_icon_12.webp"
                                alt="Icono favorito remove"
                            />
                        ) : (
                            <img
                                src="./assets/item/favorite_icon_12.webp"
                                alt="Icono favorito add"
                            />
                        )}
                    </button>
                    <img
                        className="items_icons_bottom-delete"
                        src="./assets/item/delete_icon_12.webp"
                        alt="Icono borrar"
                        onClick={handleClick}
                        data-testid="bottom-delete"
                    />
                </div>
            </div>
        </section>
    );
}
