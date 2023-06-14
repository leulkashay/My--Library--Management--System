import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://wallpapercave.com/wp/wp6436377.jpg" alt=''/>
                <img src="https://www.rd.com/wp-content/uploads/2017/09/08-Jaw-Dropping-Photos-of-the-Most-Beautiful-Country-in-the-World_292110188-Stefano-Termanini.jpg" alt=''/>
                <img src="https://www.jetsetter.com/uploads/sites/7/2019/04/GettyImages-945273794-1832x1374.jpg" alt=''/>
                <img src="https://www.worldstopmost.com/wp-content/uploads/2016/12/Italy-Top-10-Most-Beautiful-Countries.jpg" alt=''/>
                <img src="https://s3.scoopwhoop.com/anj/gosau/6e4e9c08-c967-41f6-8025-2262feb47b66.jpg" alt=''/>
                <img src="https://cdn.wallpapersafari.com/9/16/68dGmQ.jpg" alt=''/>
                <img src="https://www.getthatright.com/wp-content/uploads/2017/08/Top-10-Most-Beautiful-Countries-in-the-World-800x445.jpg" alt=''/>
                <img src="https://www.vortexmag.net/wp-content/uploads/2018/09/austria1-e1519406687814-1.jpg" alt=''/>
                <img src="https://www.sarcasm.co/wp-content/uploads/2019/07/10-632x420.png" alt=''/>
                <img src="https://s3.scoopwhoop.com/anj/gosau/6e4e9c08-c967-41f6-8025-2262feb47b66.jpg" alt=''/>
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery
