
function DonateButton({mobileMode=false}) {
    return (<a href="https://meshulam.co.il/purchase?b=e097903b1fd2bd1ce0088bcba9b2a03c" target="_blank" rel="noreferrer">
        <button className={mobileMode ? "floating-button mobile" : "floating-button desktop"}>
            היו שותפים!
        </button>
    </a>);
}
export default DonateButton;