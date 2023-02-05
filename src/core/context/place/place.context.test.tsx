import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { PlaceStructure } from '../../../types/place';
import { UserStructure } from '../../../types/user';
import {
    initialContext,
    initialUserContext,
    PlaceContext,
    UserContext,
} from './place.context';

const mockPlace: PlaceStructure = {
    id: '001',
    name: 'Km0',
    start: 'Madrid',
    finish: 'Valencia',
    distance: '2:30h',
    image: 'string',
    away: false,
    forKids: true,
    forDogs: true,
    coment: 'Todo ok',
    isFavorite: false,
};
const mockUser: UserStructure = {
    name: 'Usuario01',
    photoURL: 'string',
    token: 'Token001',
    uid: 'uid001',
};

initialContext.places = [mockPlace];
initialUserContext.user = mockUser;

describe('Given the context AppContext', () => {
    let TestComponent: () => JSX.Element;
    describe('When a Test place Component is wrapper with this context', () => {
        beforeEach(() => {
            TestComponent = () => {
                const {
                    places,
                    handleLoad,
                    handleDelete,
                    handleAdd,
                    handleUpdate,
                } = useContext(PlaceContext);
                handleLoad();
                handleAdd(mockPlace);
                handleDelete(mockPlace.name);
                handleUpdate(mockPlace);
                return <>{places[0].name}</>;
            };
        });
        test('Context values should be used in the component', () => {
            render(
                <PlaceContext.Provider value={initialContext}>
                    <TestComponent></TestComponent>
                </PlaceContext.Provider>
            );
            const element = screen.getByText(initialContext.places[0].name);
            expect(element).toBeInTheDocument();
        });
    });
    describe('When a Test user Component is wrapper with this context', () => {
        beforeEach(() => {
            TestComponent = () => {
                const { user, handleLogIn, handleLogOut } =
                    useContext(UserContext);
                handleLogIn();
                handleLogOut();
                return <>{user.name}</>;
            };
        });
        test('Context values should be used in the component', () => {
            render(
                <UserContext.Provider value={initialUserContext}>
                    <TestComponent></TestComponent>
                </UserContext.Provider>
            );
            const element = screen.getByText(initialUserContext.user.name);
            expect(element).toBeInTheDocument();
        });
    });
});
