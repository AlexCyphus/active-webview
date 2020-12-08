export default function ActionButton({text, actionHandler, specClass, size, color, close, closeHandler}) {
  
    // assign css class
    if (color == "pink"){color = "pink-background"}
    else {color = "blue-background"}
  
    return ([
        <div className={specClass}>
            <a className="undecorated-link" onClick={actionHandler}>
                <div className="action-button-container">
                    <div className={"action-button-inner " + color} >
                    <p className="action-button-inner-text">{text.toUpperCase()}</p>
                    </div>
                </div>
            </a>
            {close == true ? 
                <a className="undecorated-link" onClick={actionHandler}>
                    <div className="close-button">
                        <p>Close</p>
                    </div>
                </a>
                :
                null
            }
        </div>
    ])
  }