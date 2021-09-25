import React from 'react';
import {shallow} from 'enzyme';
import  {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas para <GifGridItem />', () => {
    
    const title = 'Un título';
    const url = 'https://localhost/img'
    const wrapper = shallow( <GifGridItem title={title} url={url} />);


    test('should be show correctly components', () => {
        
        expect( wrapper).toMatchSnapshot();
    });

    test('debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    
    test('Debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        //console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('debe tener animate__fadeIn', () => {
        
        const cssClassExpected = 'animate__fadeIn';
        const div = wrapper.find('div');
        
        expect(div.hasClass(cssClassExpected)).toBe(true);
    })
    
})
