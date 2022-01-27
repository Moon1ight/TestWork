import moment from 'moment'
import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ orderInfo }) => {
    const today = moment().format('YYYY-MM-DD')

    //Количество заказов
    const deliveriesCount = orderInfo.deliveries.length

    // Заполнение прогрессбара
    let deliveredCount = 0
    for (let i = 0; i < deliveriesCount; i++) {
        if (orderInfo.deliveries[i].date <= today) {
            deliveredCount++
        }
    }
    const deliveredPercent = (deliveredCount / deliveriesCount) * 100

    //Сколько дней до БЛИЖАЙШЕЙ доставки
    let nearestDelivery
    for (let i = 0; i < deliveriesCount; i++) {
        if (moment(orderInfo.deliveries[i].date).isAfter(moment(today))) {
            nearestDelivery = moment(orderInfo.deliveries[i].date)
            break
        }
    }
    const daysLeftToDelivery = moment(nearestDelivery).diff(today, 'days')

    //Осталось дней до конца заказа
    const lastDelivery = moment(orderInfo.deliveries[deliveriesCount - 1].date).format('YYYY-MM-DD')
    let daysLeft = moment(lastDelivery).diff(moment(today), 'days')
    if (daysLeft < 0) {
        daysLeft = 0
    }

    return (
        <div className="progressbar_block">
            <div className="progressbar-info">
                <h2 className="progressbar-info_time">{daysLeftToDelivery} дней</h2>
                <div className="progressbar-info_block">
                    <span className="progressbar-info_name">{orderInfo.packageName}</span>
                    <span className="progressbar-info_calories">{orderInfo.packageCalories} </span>
                </div>
            </div>

            <div className="progressbar_container">
                <div className="progressbar-line">
                    <span className="progressbar-line_progress" style={{ width: `${deliveredPercent}%` }}></span>
                </div>
                <div className="progressbar-line_info">
                    <span className="progressbar-line_info_date">
                        {moment(orderInfo.deliveries[0].date).format('D MMM')}
                    </span>
                    <span>Осталось {daysLeft} дней</span>
                    <span className="progressbar-line_info_date">
                        {moment(orderInfo.deliveries[deliveriesCount - 1].date).format('D MMM')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
