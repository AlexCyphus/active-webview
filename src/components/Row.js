import { Children } from "react";

export default function Row({title, image, rowClickHandler, children, roundImage}) {
    return (
        <div className="row-container" onClick={rowClickHandler}>
            <div className="row-image-container">
                <img src={image} className={"row-image " + (roundImage ? "round-image" : null)}/>
            </div>
            <div className="row-text-container">
                <p className="row-title">{title}</p>
                {children}
            </div>
        </div>  
    )
}