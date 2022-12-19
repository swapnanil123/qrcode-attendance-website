import React,{ useState, useEffect } from 'react';
import { QRCodeCanvas } from "qrcode.react";
import { QrReader } from 'react-qr-reader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminContainer.css';

function AdminMainContainer() {
    
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const time = current.toLocaleTimeString("en-US");

    const [url, setUrl] = useState("");
    const [data, setData] = useState('No result');

    const randStringGen = () => {
        var randomstring = '';
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz123456789@#$%&";

        var lenString = 15;
        for (var i=0; i<lenString; i++) {  
            var rnum = Math.floor(Math.random() * characters.length);  
            randomstring += characters.substring(rnum, rnum+1);  
        }
        return randomstring;
    };
    var randStr='';    
    const durationOfInterval = 0.1*60000;
    setInterval(() => {
        randStr =randStringGen();
        setUrl(randStr);
    }, durationOfInterval);
    
    const qrcode = (
        <QRCodeCanvas
          id="qrCode"
          value={url}
          size={280}
          bgColor={"#FFFFFF"}
          level={"H"}
        />
    );

    const qrReader = (
        <QrReader
            onResult={(result, error) => {
                if (!!result) {
                    console.log("GOT IT")
                    setData(result.text);
                }

                if (!!error) {
                    console.info(error);
                }
            }}
            style={{ width: '300px',height: '300px' }}
        />
    )


    return(
        <div className='adminMainWrapper container-fluid'>
            <div className='leftWrapper'>
                <span className='mb-4 userName text-capitalize'><strong>Swapnanil Paul</strong></span>
                <div className='qrArea mb-4'> {qrcode} </div>
                <div className='timeAndDateWrapper mb-4 text-muted'>
                     {time} <div className='verticalLine ms-4 me-4'/> {date}
                </div>
                <div className='qrDetails'>
                    <span className='mb-2 text-capitalize'><strong >class name : </strong>computer networks</span>
                    <span>This QR Code valid upto 11.00am to 1.00pm.</span>
                    <span>{url}</span>
                </div>
            </div>
            <div className='rightWrapper'>
                <div className='qrReaderWrapper'>
                    {/* {qrReader} */}
                </div>
                
                <p>{data}</p>
            </div>
        </div>
    )
}

export default AdminMainContainer;