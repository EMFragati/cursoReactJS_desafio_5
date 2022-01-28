import React, { useState } from "react";

const ItemCount= ( { stockLimit } ) => {

    /*Nota: Esto se conoce como "Desestructuracion de arrays". El hook useState() devuelve un array de dos elementos,
     de esta fomra estoy declarando 2 variables en orden con los valores de ese array*/
    const [ counter , setCounter ] =  useState(1);
    const [ stock , setStock ] =  useState(0);
    
    const incrementCounter = () => {
        if ( counter < stockLimit ) {
            setCounter ( counter + 1 );
        };
    };

    const decreaseCounter = () => {
        if ( counter > 1 ) {
            setCounter ( counter - 1 );
        };        
    };

    /*Si al sumar elementos al carrito no supero el limite, permito la actualizacion*/
    const incrementStock = () => {        
        if ( ( stock + counter ) < stockLimit ) {
            setStock ( stock + counter );
        } else { 
            setStock ( 5 );
        };
    };

    /*Decremento el contador de stock. Si la resta podria dar un valor negativo, directamente dejo "0"*/
    const decreaseStock = () => {       
        if ( ( stock - counter ) > 0 ) {
            setStock ( stock - counter );
        } else { setStock ( 0 ) };
    };

    /*Renderizado*/
    return(
        <>           
            <div className="contanier">         

                <div className="row justify-content-md-center">
                    <div className="col-2 text-center">
                        <br/>                        
                        <button type="button" className="btn btn-primary mx-3" onClick={ decreaseCounter }><strong>-</strong></button>                            
                        <span>{ counter }</span>
                        <button type="button" className="btn btn-primary mx-3" onClick={ incrementCounter }><strong>+</strong></button>                                                        
                        <br/><br/>
                    </div>                    
                </div>

                <div className="row justify-content-md-center">
                    <div className="col-6 text-center">
                        <button type="button" className="btn btn-primary mx-3 mt-2 mb-2" onClick={ incrementStock }>Agregar al Carrito</button>
                        <br/>
                        <button type="button" className="btn btn-primary mx-3 mt-2 mb-2" onClick={ decreaseStock }>Remover del Carrito</button>                        
                        <br/>
                        <span> Stock actual: { stock }</span>                        
                    </div>
                </div>
            </div>
        </>
    )
};

export default ItemCount;