

function Priceoption({prices}) {


const {name , price , brand} = prices ; 

    return (
        <div>

        <div>
            <h1>Product Name : {name}</h1>
            <p>Product Price: {price}</p>
            
        </div>
        </div>
        
    );
}

export {Priceoption} ;