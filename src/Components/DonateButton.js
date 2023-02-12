import { Link } from "react-router-dom";

function DonateButton({ mobileMode = false, teamId = '0' }) {
    return (
        <Link to={`/payment/?t=${teamId}`} >
            <button className={mobileMode ? "floating-button mobile" : "floating-button desktop"}>
                היו שותפים!
            </button>
        </Link >
    );
}
export default DonateButton;