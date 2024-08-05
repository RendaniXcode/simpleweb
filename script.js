function enlargeImage(img) {
    const enlargedImg = document.createElement('img');
    enlargedImg.src = img.src;
    enlargedImg.style.width = '100%';
    enlargedImg.style.height = 'auto';
    enlargedImg.style.position = 'fixed';
    enlargedImg.style.top = '0';
    enlargedImg.style.left = '0';
    enlargedImg.style.zIndex = '10';
    enlargedImg.onclick = () => {
        document.body.removeChild(enlargedImg);
    }
    document.body.appendChild(enlargedImg);
}
