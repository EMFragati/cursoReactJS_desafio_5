import itemImage from './dummyItem.png';

const Item = ( { name, description, price } ) => { 
    
    /*Renderizado*/
    return(
        <>
            <div className="card mt-2">                
                <div className="card-body">
                    <div className="text-center mt-2"><img src={itemImage} alt="item.png"/><br/></div>
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text">{description}</p>                    
                </div>
                <div className="card-footer text-muted">Precio: {price}                   
                </div>
            </div>
        </>
    )
};

export default Item;
