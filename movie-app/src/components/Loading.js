import styled from '../style/Loading.module.css';
import ReactLoading from 'react-loading';
const Loadingbar = () => {
    return (
        <div className={styled.container}>
            <h2>Loading...</h2>
            <ReactLoading className={styled.loading} type={'spin'} color={"#000000"} />
        </div>
    );
}
export default Loadingbar;