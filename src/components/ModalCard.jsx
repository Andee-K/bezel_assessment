import React, { useState } from 'react';
import ModalCardCSS from './ModalCard.module.css';
import ActionButton from './ActionButton';
import ModalPriceBox from './ModalPriceBox';

const ModalCard = () => {
    const [cardVisible, setCardVisible] = useState(true);

    const handleClick = () => {
        setCardVisible(false);
    };

    return (
        <div>
            {cardVisible && (
                <div className={ModalCardCSS.modalCard}>
                    <button className={ModalCardCSS.exitButton} onClick={handleClick}>
                        X
                    </button>
                    <div>
                        <div className={ModalCardCSS.modalCardHeader}>
                            <h5 className={ModalCardCSS.congratsText}> CONGRATS! </h5>
                            <h2 className={ModalCardCSS.soldText}> Your watch sold! </h2>
                            <p className={ModalCardCSS.infoText}>
                                You have 1 business day to accept the sale. If you do not accept,
                                it will be automatically rejected.
                            </p>
                        </div>
                        <ActionButton />
                    </div>
                    <ModalPriceBox />
                </div>
            )}
        </div>
    );
};

export default ModalCard;
