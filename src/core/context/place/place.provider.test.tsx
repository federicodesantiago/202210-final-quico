import { render } from '@testing-library/react';
import * as usePlaces from '../../hooks/place.hook';
import * as useUser from '../../hooks/user.hook';
import { PlaceContextProvider, UserContextProvider } from './place.provider';

describe('Given two ContextProvider', () => {
    describe('When we use it', () => {
        test('Then it should call the custom hook usePlaces', () => {
            const spyUsePlaces = jest.spyOn(usePlaces, 'usePlaces');
            render(
                <PlaceContextProvider>
                    <></>
                </PlaceContextProvider>
            );
            expect(spyUsePlaces).toHaveBeenCalled();
        });
        test('Then it should call the custom hook useUsers', () => {
            const spyUseUsers = jest.spyOn(useUser, 'useUser');
            render(
                <UserContextProvider>
                    <></>
                </UserContextProvider>
            );
            expect(spyUseUsers).toHaveBeenCalled();
        });
    });
});
