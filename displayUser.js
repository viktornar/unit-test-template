import $ from 'jquery';
import { fetchUser } from './fetchUser';

const initDisplayUserOnClick = () => {
    $('#button').click(() => {
        fetchUser(user => {
            const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');
            $('#username').text(user.fullName + ' - ' + loggedText);
        });
    });
}

export default initDisplayUserOnClick;