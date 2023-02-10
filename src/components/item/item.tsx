import { useContext, useState } from 'react';
import { PlaceContext } from '../../core/context/place/place.context';
import { PlaceStructure } from '../../types/place';
import { EditForm } from './editForm';
import './item.scss';

export function Item({ item }: { item: PlaceStructure }) {
    const { handleUpdate, handleDelete } = useContext(PlaceContext);

    const handleClickDelete = () => {
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
                            src="https://firebasestorage.googleapis.com/v0/b/stop-y-go.appspot.com/o/kid_icon.webp?alt=media&token=d635085f-8870-4ca3-93c2-8113469b5365"
                            alt="Icono niño"
                        />
                    ) : (
                        <span></span>
                    )}
                    {item.forDogs ? (
                        <img
                            className="items_icons_top-dog"
                            src="https://firebasestorage.googleapis.com/v0/b/stop-y-go.appspot.com/o/dog_icon.webp?alt=media&token=45335d71-6baa-4ca8-8ea9-d50fc4359e88"
                            alt="Icono perro"
                        />
                    ) : (
                        <span></span>
                    )}
                </div>
                <div className="items_icons_bottom">
                    <img
                        className="items_icons_bottom-edit"
                        src="https://firebasestorage.googleapis.com/v0/b/stop-y-go.appspot.com/o/edit_icon_12.webp?alt=media&token=bcb0bfbf-0403-48e5-a062-a3d65fbfb6ad"
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
                                src="https://firebasestorage.googleapis.com/v0/b/stop-y-go.appspot.com/o/favoriteNOT_icon_12.webp?alt=media&token=d6ca4e66-1c41-4293-971c-75c51302a8be"
                                alt="Icono favorito remove"
                            />
                        ) : (
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/stop-y-go.appspot.com/o/favorite_icon_12.webp?alt=media&token=061424e7-f999-4932-ac00-bad53b05c873"
                                alt="Icono favorito add"
                            />
                        )}
                    </button>
                    <img
                        className="items_icons_bottom-delete"
                        src="https://firebasestorage.googleapis.com/v0/b/stop-y-go.appspot.com/o/delete_icon_12.webp?alt=media&token=f99c0066-2830-4968-9657-d2b474f175c2"
                        alt="Icono borrar"
                        onClick={handleClickDelete}
                        data-testid="bottom-delete"
                    />
                </div>
            </div>
        </section>
    );
}
