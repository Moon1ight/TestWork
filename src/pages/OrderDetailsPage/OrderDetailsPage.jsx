import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import addIcon from '../../assets/img/add.png'
import deleteIcon from '../../assets/img/delete.png'
import DeliveryCard from '../../components/DeliveryCard/DeliveryCard'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { OrdersActionCreators } from '../../store/reducers/orders/action-creators'
import './OrderDetailsPage.css'

const OrderDetailsPage = () => {
    const router = useHistory()
    const dispatch = useDispatch()
    const params = useParams()

    // Вывод заказа, по кт кликнул пользователь
    const { orders } = useSelector((state) => state.orders)
    const orderId = Number(params.id)
    const orderDetails = orders.find((el) => el.id === orderId)

    // Дублирование заказа
    const duplicateHandler = (orderDetails) => {
        alert('Заказ продублирован!')
        let orderDuplicate = Object.assign({}, orderDetails)
        orderDuplicate.id = Math.random(1)
        dispatch(OrdersActionCreators.duplicateOrder(orderDuplicate))
    }

    // Отмена заказа
    const cancelHandler = (orderId) => {
        alert('Заказ отменен!')
        dispatch(OrdersActionCreators.cancelOrder(orderId))
        router.push('/orders')
    }

    return (
        <div className="container-details">
            <span className="button_back" onClick={() => router.goBack()}>
                Назад
            </span>
            <ProgressBar orderInfo={orderDetails} />
            <h2 className="details_title">Доставки</h2>
            <div className="deliveries">
                {orderDetails.deliveries.map((delivery) => (
                    <DeliveryCard key={delivery.id} deliveryInfo={delivery} />
                ))}
            </div>
            {/* Секция с кнопками */}
            <div className="button-container">
                <button onClick={() => duplicateHandler(orderDetails)} className="button-container_item">
                    <span>Дублировать заказ</span>
                    <span>
                        <img src={addIcon} alt="add" />
                    </span>
                </button>
                <button onClick={() => cancelHandler(orderId)} className="button-container_item">
                    <span>Отменить заказ</span>
                    <span>
                        <img src={deleteIcon} alt="delte" />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default OrderDetailsPage
