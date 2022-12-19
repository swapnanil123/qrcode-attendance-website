import React,{useState} from 'react';
import { QrReader } from 'react-qr-reader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './studentMainContainer.css';

function StudentMainContainer() {

    const [data, setData] = useState('No result');
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
            style={{ width: '100%', height: '100%' }}
            
        />
    )
    return(
        <div className='stdWrapper container-fluid row'>
            <div className='qrReaderWrapper col-12 mb-3'>
                {qrReader}
            </div>
                            
            <span className='col-12 text-center'>{data}</span>
        </div>
    )
}

export default StudentMainContainer;