'use strict';

import $ from 'jquery';

function parseJSON(user) {
    return {
        fullName: user.firstName + ' ' + user.lastName,
        loggedIn: true,
    };
}

const fetchUser = function(callback) {
    return $.ajax({
        success: user => callback(parseJSON(user)),
        type: 'GET',
        url: 'http://example.com/currentUser',
    });
}

export { fetchUser };