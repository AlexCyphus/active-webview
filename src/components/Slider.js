export default function Slider({sliderScreen, title1, title2, handleSliderChange}) {
    return (
        <div className="slider d-flex">
            <div className={"slider-title-container " + (sliderScreen == 0 ? 'slider-title-container-blue' : null)} onClick={() => handleSliderChange(0)}><p className="slider-title-text">{title1}</p></div>
            <div className={"slider-title-container " + (sliderScreen == 1 ? 'slider-title-container-blue' : null)} onClick={() => handleSliderChange(1)}><p className="slider-title-text">{title2}</p></div>
        </div>
    )
}