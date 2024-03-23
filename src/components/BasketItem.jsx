function BasketItem(props){
    const {id, name, price, quantity, removeItem = Function.prototype, incQuantity = Function.prototype, decQuantity= Function.prototype} = props;
    return (
        <ul className="collection">
            <li className="collection-item">
                <h6>{name}</h6> 
                <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i> x {quantity} <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}> add</i>= {price * quantity}
                <span className="secondary-content " onClick={() => removeItem(id)}>
                    <i className="material-icons basket-delete">clear</i>
                </span>
            </li>
        </ul>
    );
}
export { BasketItem };