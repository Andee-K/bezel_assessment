import Axios from "axios";
import ActionButtonCSS from "./ActionButton.module.css";

const ActionButton = () => {
    // when user clicks accept button
    const fetchAccept = async () => {
        try {
            const res = await Axios.post("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/accept");
            alert(`Accept response: ${res.data.message}`);
        } catch (error) {
            alert(`Error: ${error.response.data.error.message}`);
        }
    };

    // when user clicks decline button
    const fetchDecline = async () => {
        try {
            const res = await Axios.post("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/decline");
            alert(`Decline response: ${res.data.message}`);
        } catch (error) {
            alert(`Error: ${error.response.data.error.message}`);
        }
    };

    return (
        <div>
            <button className={ActionButtonCSS.accept} onClick={fetchAccept}>
                Accept sale
            </button>

            <button className={ActionButtonCSS.decline} onClick={fetchDecline}>
                Reject sale
            </button>
        </div>
    );
};

export default ActionButton;

