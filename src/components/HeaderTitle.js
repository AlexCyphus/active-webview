export default function HeaderTitle({title, backHandler}) {
    return (
        <div className="header-title-container">
            <div className="header-title-inner">
                <div className="back-arrow" onClick={backHandler}><img className="back-arrow-img" src="/arrow.png"></img></div>
                <div><p className="header-title">{title}</p></div>
            </div>
        </div>
    )
}