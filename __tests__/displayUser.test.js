'use strict';

jest.mock('../fetchUser.js');

import { fetchUser } from '../fetchUser';
import $ from 'jquery';
import initDisplayUserOnClick from '../displayUser';

it('displays a user after a click', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <span id="username" />' +
        '  <button id="button" />' +
        '</div>';

    // Init on click
    initDisplayUserOnClick();

    fetchUser.mockImplementation(cb => {
        cb({
            fullName: 'Johnny Cash',
            loggedIn: true,
        });
    });

    // Use jquery to emulate a click on our button
    $('#button').click();

    expect(fetchUser).toBeCalled();
    expect($('#username').text()).toEqual('Johnny Cash - Logged In');
});