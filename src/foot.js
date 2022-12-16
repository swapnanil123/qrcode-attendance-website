import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegCopyright } from "react-icons/fa";
import './foot.css';

function Foot() {
    return(
        <div className="foot_wrapper container-fluid">
            <FaRegCopyright style={{"color" : "white", "fontSize" : "15px"}}/>
            <span className='footerTagLine'>Swapnanil Paul</span>
        </div>
    )
}

export default Foot;