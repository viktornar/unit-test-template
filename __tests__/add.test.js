'use strict';

import { add } from '../index';

it('Adds two numbers', () => {
    const result = add(2, 5);

    expect(result).toEqual(7);
});