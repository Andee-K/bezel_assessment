import { useEffect, useState } from "react"
import Axios from "axios"
import ModalPriceBoxCSS from "./ModalPriceBox.module.css"

const ModalPriceBox = () => {
    const [watchData, setWatchData] = useState(null);

    const fetchData = () => {
        Axios.get("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123").then((res) => {
            setWatchData(res.data);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={ModalPriceBoxCSS.priceBox}>
            <hr className={ModalPriceBoxCSS.hzLine}></hr>

            <div className={ModalPriceBoxCSS.header}>
                <div>
                    <h4 className={ModalPriceBoxCSS.watchTitle}>{`
                        ${watchData?.listing.model.brand.displayName} 
                        ${watchData?.listing.model.displayName} 
                        ${watchData?.listing.model.referenceNumber}`}
                    </h4>

                    <h4 className={ModalPriceBoxCSS.watchCondition}>
                        {`${watchData?.listing.condition} / ${watchData?.listing.manufactureYear}`}
                    </h4>
                </div>

                <img className={ModalPriceBoxCSS.watchImage} src={watchData?.listing.images[0].image.url} alt="icons" />
            </div>

            <hr className={ModalPriceBoxCSS.hzLine}></hr>

            <h4 className={ModalPriceBoxCSS.pricing}>
                <div className={ModalPriceBoxCSS.pricingRow}>
                    <span>Selling Price</span>
                    <span>{`${watchData?.salePriceCents} ¢`}</span>
                </div>
                <div className={ModalPriceBoxCSS.pricingRow}>
                    <span>Commission Rate</span>
                    <span>{`${watchData?.commissionRateBips} ¢`}</span>
                </div>
                <div className={ModalPriceBoxCSS.pricingRow}>
                    <span>Seller Fee</span>
                    <span>{`${watchData?.sellerFeeCents} ¢`}</span>
                </div>
                <div className={ModalPriceBoxCSS.pricingRow}>
                    <span>Insured Shipping</span>
                    <span>Free</span>
                </div>
                <div className={ModalPriceBoxCSS.bezelAuth}>
                    <span>Bezel Authentication</span>
                    <span>Free</span>
                </div>
            </h4>

            <hr className={ModalPriceBoxCSS.hzLine}></hr>

            <div className={ModalPriceBoxCSS.earnings}>
                <span>Earnings</span>
                <span>{`${watchData?.payoutAmountCents} ¢`}</span>
            </div>
        </div>
    );
};

export default ModalPriceBox;

