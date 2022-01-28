import { useEffect , useState } from 'react';
import Item from './Item';

const ItemList = ( { items } ) => {   
    /*Estados de la componente*/
    const [ inputItems , setInputItems ] = useState( items );
    const [ products , setProducts ] = useState([]);
    
    /*Fases de vida: montage y actualizacion*/;
    useEffect(() => {    
        /*Funciones basicas*/;
        const getProducts = () =>{                
            return inputItems
        };      

        /*Promesas*/;
        const promise_is_ok = true;
        const showItemsPromise = ( time, itemsToShow ) => {        
            return new Promise(( resolve, reject ) => {
                if ( promise_is_ok ) {                   
                    setTimeout( () => { resolve( itemsToShow ) }, time );
                } else {
                    reject( console.log("error"))
                }
            })
        };

        /*A los 5 segundos del renderizado inicial se ejecutara esta promesa*/;
        console.log(products);
        showItemsPromise ( 5000, getProducts())
            .then( response => setProducts( response ) )
            .catch( error => console.log( error ));
    });
    
    /*Renderizado*/;
    return(
        <> 
        <div className="container">
            <div className="row">        
                <div className="col-5">
                    {
                        products.map( product => ( 
                            <Item name={product.name} description={product.description} price={product.price} /> 
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
};

export default ItemList;