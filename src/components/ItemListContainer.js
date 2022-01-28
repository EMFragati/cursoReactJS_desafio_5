import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from './products';

const ItemListContainer = ( { stockLimit } ) => { 
    
    /*Renderizado*/
    return(
        <>          
            <ItemCount stockLimit="5"/>
            <hr/>           
            <ItemList items={products}/>           
        </>
    )
};

export default ItemListContainer;