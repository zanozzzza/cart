import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const {order = [], handleBasketShow = Function.prototype, removeItem = Function.prototype, incQuantity = Function.prototype, decQuantity = Function.prototype} = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
        <ul className="collection basket-list">
            <li className="collection-item active #1565c0 blue darken-3"><h5>Корзина</h5></li>
            {order.length ? (
                order.map((item) => <BasketItem 
                key = {item.id} 
                removeItem={removeItem} 
                incQuantity = {incQuantity} 
                decQuantity={decQuantity} 
                {...item} /> )
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active #1565c0 blue darken-3"><h5>Общая стоимость заказа: {totalPrice} р</h5></li>
            <i className="material-icons basket-clear" onClick={handleBasketShow}>clear</i>
        </ul>
    );
}
export { BasketList };