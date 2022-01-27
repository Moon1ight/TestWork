import moment from 'moment'
import React from 'react'
import arrowIcon from '../../assets/img/arrow.png'
import deliveryIcon from '../../assets/img/delivery.png'
import './DeliveryCard.css'

const DeliveryCard = ({ deliveryInfo }) => {
    return (
        <div className="delivery-card">
            <div className="delivery-card_block">
                <img className="delivery-card_deliveryIcon" src={deliveryIcon} alt="delivery" />
                <span className="delivery-card_date">{moment(deliveryInfo.date).format('D MMMM, dddd')}</span>
            </div>
            <div className="delivery-card_block">
                <span className="delivery-card_date">{deliveryInfo.interval}</span>
                <img className="delivery-card_arrowIcon" src={arrowIcon} alt="more info" />
            </div>
        </div>
    )
}

export default DeliveryCard
