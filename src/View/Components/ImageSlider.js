import bgOne from "../../Assets/imgs/bg1.jpg";
import bgTwo from "../../Assets/imgs/bg2.jpg";
import bgThree from "../../Assets/imgs/bg3.jpg";
// refer to bro code
function createImageSlider() {
    const sliderDiv = document.createElement('div');
    sliderDiv.classList.add('slider');
    const slidesDiv = document.createElement('div');
    slidesDiv.classList.add('slides');
    
    const imgs = [bgOne, bgTwo, bgThree];

    imgs.forEach( (img, idx) => {
        const imgEle = document.createElement('img');
        imgEle.src = img;
        imgEle.classList.add('slide');
        imgEle.alt = `Img #${idx + 1}`;
        slidesDiv.appendChild(imgEle);
    });

    const prevBtn = document.createElement('button');
    prevBtn.classList.add('prev');
    prevBtn.textContent = '<';
    sliderDiv.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.classList.add('next');
    nextBtn.textContent = '>';
    sliderDiv.appendChild(nextBtn);

    sliderDiv.appendChild(slidesDiv);
    return sliderDiv;
}

export default createImageSlider;