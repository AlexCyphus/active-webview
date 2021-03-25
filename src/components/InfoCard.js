import ActionButton from "./ActionButton";

export default function InfoCard({title, children, buttonAction, closeAction, buttonText, handleOverlay}){
    return (
        <>
        <div className="overlay-black" onClick={handleOverlay}></div>
        <div className="infocard-container">
        <div className="infocard-close-x" onClick={closeAction}>x</div>
          <div className="infocard-title-container">
            <p className="infocard-title">{title}</p>
          </div>
          <div className="infocard-main-content">
            {children}
          </div>
          <ActionButton text={buttonText} specClass={"button-fixed-bottom"} onClick={buttonAction}/>
        </div>
        </>
    )   
}