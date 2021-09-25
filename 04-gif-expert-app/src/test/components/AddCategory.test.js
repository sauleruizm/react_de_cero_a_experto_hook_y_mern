import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper;

    beforeEach( ()=> {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories= {setCategories} />);
    } );


    test('debe de mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    })


    test('no debe de postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();

    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        //simular el imput change
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);

        //simular el submit
        wrapper.find('form').simulate('submit',{ preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();

        expect(wrapper.find('input').text().trim()).toBe('');
    })
    
    
})
