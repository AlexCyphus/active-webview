import ActionButton from "./ActionButton";

// use conditional rendering in main file
export default function Popup({title, description, children, overlayHandler, placeholder, buttonText}) {
    console.log(description)
    return (
        <>
        <div className="overlay-black" onClick={overlayHandler}></div>
        <div className="popup-container">
            <p className='popup-title'>{title}</p>
            <div className="popup-description-holder">
                {description ? <p className='popup-description'>{description}</p>:children}
            </div>
            <div className="popup-input-container">
                <input placeholder={placeholder}/>
            </div>
            <ActionButton text={buttonText} color="pink" close={true}/>
        </div> 
        </>
    )
}