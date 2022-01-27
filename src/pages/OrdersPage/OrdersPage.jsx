import moment from 'moment'
import 'moment/locale/ru'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import OrderCard from '../../components/OrderCard/OrderCard'
import './OrdersPage.css'

const Orders = () => {
    const [myOrders, setMyOrders] = useState([])
    const { isLoading } = useSelector((state) => state.orders)
    const { orders } = useSelector((state) => state.orders)

    //Загрузка заказов
    useEffect(() => {
        setMyOrders(orders)
    }, [orders])

    //Сортировка по дате
    if (myOrders) {
        for (let i = 0; i < myOrders?.length; i++) {
            myOrders[i].deliveries.sort((a, b) => moment(a.date) - moment(b.date))
        }
    }

    return (
        <div className="container">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="orders-page_header">
                        <h2 className="orders-page_title">Мои заказы</h2>
                        <span className="orders-page_count"> {myOrders.length === 0 ? '' : myOrders.length}</span>
                    </div>
                    <div className="order-cards">
                        {myOrders.length === 0 ? (
                            <div className="order-cards_no_orders">
                                <h3>Заказов нет</h3>
                            </div>
                        ) : (
                            myOrders?.map((order) => <OrderCard key={order.id} id={order.id} orderInfo={order} />)
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default Orders
