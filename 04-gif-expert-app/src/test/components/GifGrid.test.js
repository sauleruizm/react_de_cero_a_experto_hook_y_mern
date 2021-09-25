import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');


describe('pruebas en GifGrid', () => {
    
    const category = 'one Punch';

    test('debe mostrarse correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={category}></GifGrid>);
        expect(wrapper).toMatchSnapshot();

    })
  
    test('debe de mostrar items cuandose carga imágenes useFetchGifs', () => {
    
        const gifs = [
            {id:'abc', url:'https:/test.img', title:'cualquier cosa'}
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={category}></GifGrid>);
        expect(wrapper).toMatchSnapshot();
        
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })
    
})
