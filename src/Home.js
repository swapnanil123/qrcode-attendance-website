import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
    return(
        <div className='mainWrapper container-fluid disable-select'>
            <Link to={<AdminContain/>}><div className='adminWrapper mb-4'>Admin</div></Link>
            <Link to={<AdminContain/>}><div className='studentWrapper '>Student</div></Link>
        </div>
    )
}

export default Home;