'use strict';

import { car } from '../model';

describe('my car', () => {
    test('is Skoda', () => {
        expect(car.name).toEqual('Skoda');
    });

    test('is popular', () => {
        expect(car.isPopular).toBeTruthy();
    });

    test('have max speed of 150', () => {
        expect(car.speed).toBeDefined();
        expect(car.speed.max).toEqual(150);
    });
});