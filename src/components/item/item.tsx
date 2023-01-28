import { useContext, useState } from 'react';
import { PlaceContext } from '../../core/context/place/place.context';
import { PlaceStructure } from '../../types/place';
import { EditButton } from './edit.button';
import './item.scss';

export function Item({ item }: { item: PlaceStructure }) {
    const { handleUpdate, handleDelete } = useContext(PlaceContext);

    const handleClick = () => {
        handleDelete(item.name);
    };

    const handleClickFav = () => {
        handleUpdate(item);
    };

    const [modalEdit, setModalEdit] = useState(false);

    const openModalEdit = () => {
        setModalEdit(!modalEdit);
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
                        onClick={openModalEdit}
                    />
                    {modalEdit ? (
                        <EditButton
                            item={item}
                            openModalEdit={() => {
                                setModalEdit(false);
                            }}
                            modalEdit={modalEdit}
                        />
                    ) : null}
                    <button
                        type="submit"
                        className="items_icons_bottom-fav"
                        onClick={handleClickFav}
                    >
                        {item.isFavorite ? (
                            <img
                                src="./assets/item/favorite_icon_12.webp"
                                alt="Icono favorito add"
                            />
                        ) : (
                            <img
                                src="./assets/item/favoriteNOT_icon_12.webp"
                                alt="Icono favorito remove"
                            />
                        )}
                    </button>
                    <img
                        className="items_icons_bottom-delete"
                        src="./assets/item/delete_icon_12.webp"
                        alt="Icono borrar"
                        onClick={handleClick}
                    />
                </div>
            </div>
        </section>
    );
}
