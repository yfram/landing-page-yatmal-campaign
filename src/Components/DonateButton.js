import { Link } from "react-router-dom";

function DonateButton({ mobileMode = false }) {
    return (
        <Link to="/payment">
            <button className={mobileMode ? "floating-button mobile" : "floating-button desktop"}>
                היו שותפים!
            </button>
        </Link>
    );
}
export default DonateButton;