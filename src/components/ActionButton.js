export default function ActionButton({text, actionHandler, specClass, size, color, close, closeHandler}) {
  
    // assign css class
    if (color === "pink"){color = "pink-background"}
    else {color = "blue-background"}
  
    return ([
        <div className={specClass} key={text + String(actionHandler)}>
            <div className="action-button-container undecorated-link" onClick={()=>console.log("y")}>
                <div className={"action-button-inner " + color} >
                <p className="action-button-inner-text">{text.toUpperCase()}</p>
                </div>
            </div>
            {close === true ? 
                <div className="close-button text-center undecorated-link" onClick={actionHandler}>
                    <p>Close</p>
                </div>
                :
                null
            }
        </div>
    ])
  }