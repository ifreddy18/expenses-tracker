import { useEffect, useRef, useState } from 'react';
import { AxiosState, AxiosResponse } from '../interfaces';

export const useAxios = ({ url, method = 'GET', data, token }: AxiosState): AxiosResponse => {

    const isMounted = useRef(true); // Esta montado el componente
    
    const [state, setState] = useState<AxiosResponse>({
        data: null,
        loading: true,
        error: null,
    })

    // Se use el isMounted para decir que ya el componente no estara
    // montado y poder evitar errores por ejecuciones asyncronas que esten
    // pendientes al momento de desmontar el componente
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    
    // const fetchHttp = async(): Promise<any> => {

    //     switch (method) {
    //         case 'GET':
    //             return await axios.get(url);
        
    //         // case 'POST':
    //         //     return axios.post(url, data, { 
    //         //         headers: {
    //         //             'x-token': token
    //         //         }
    //         //     })
    //     }




    // };

    
    useEffect(() => {
        setState({ ...state, loading: true });
        
        fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                // setTimeout( () => {
                    // De esta manera se verifica que el setState solo se llame
                    // si el componente aun esta montado. De esta manera se
                    // evitaran errores en memoria
                    if ( isMounted.current ) {
                        setState({
                            data,
                            loading: false,
                            error: null,
                        })
                    } else {
                        console.log('setState no se llamo');
                    }
                // }, 300);
            });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ url ])

    return state;

}