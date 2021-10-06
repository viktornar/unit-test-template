'use strict';

jest.mock('jquery');

import $ from 'jquery';
import { fetchUser } from '../fetchUser';

beforeEach(() => jest.resetModules());

it('calls into $.ajax with the correct params', () => {
    const dummyCallback = () => {};
    fetchUser(dummyCallback);

    expect($.ajax).toBeCalledWith({
        success: expect.any(Function),
        type: 'GET',
        url: 'http://example.com/currentUser',
    });
});

it('calls the callback when $.ajax requests are finished', () => {
    const callback = jest.fn();
    fetchUser(callback);

    $.ajax.mock.calls[0 /*first call*/][0 /*first argument*/].success({
        firstName: 'Bobby',
        lastName: 'Marley',
    });

    expect(callback.mock.calls[0 /*first call*/][0 /*first arg*/]).toEqual({
        fullName: 'Bobby Marley',
        loggedIn: true,
    });
});