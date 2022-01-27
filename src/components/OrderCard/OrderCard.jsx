import moment from 'moment'
import React from 'react'
import { useHistory } from 'react-router-dom'
import ProgressBar from '../ProgressBar/ProgressBar'
import './OrderCard.css'

const OrderCard = ({ orderInfo }) => {
    const router = useHistory()

    const today = moment().format('YYYY-MM-DD')
    let deliveriesCount = orderInfo.deliveries.length

    //Информация о БЛИЖАЙШЕЙ доставке
    let nearestDelivery
    for (let i = 0; i < deliveriesCount; i++) {
        if (moment(orderInfo.deliveries[i].date).isAfter(moment(today))) {
            nearestDelivery = orderInfo.deliveries[i].date
            break
        } else {
            nearestDelivery = orderInfo.deliveries[deliveriesCount - 1].date
        }
    }

    const month = moment(nearestDelivery).format('MMM')
    const monthFormated = month.replace('.', '')
    const dayOfTheMonth = moment(nearestDelivery).format('D')
    const dayOfTheWeek = moment(nearestDelivery).format('dddd')

    const nearestDeliveryInfo = orderInfo.deliveries.find((el) => el.date === nearestDelivery)

    return (
        <div onClick={() => router.push(`/orders/${orderInfo.id}`)} className="order-card">
            <ProgressBar orderInfo={orderInfo} />

            <div className="order-card_main">
                <div className="order-card_date">
                    <span className="order-card_date_month">{monthFormated} </span>
                    <span className="order-card_date_day">{dayOfTheMonth}</span>
                </div>
                <div className="order-card_info">
                    <div className="order-card_nearest">
                        <h3>Ближайшая доставка</h3>
                        <span>в {dayOfTheWeek} -</span>
                    </div>
                    <div className="order-card_details">
                        <span className="order-card_time">c {nearestDeliveryInfo.interval}</span>
                        <span className="order-card_place">Работы на объекте {nearestDeliveryInfo.address}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard
