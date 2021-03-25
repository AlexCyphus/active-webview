export default function FixedButton({image, buttonHandler}) {
    return (
    <div className="circular-button-outer" onClick={buttonHandler}>
        <div className="circular-button-inner">
            <img src={"/sample-data"+image}/>
        </div>
    </div>    
    )
}