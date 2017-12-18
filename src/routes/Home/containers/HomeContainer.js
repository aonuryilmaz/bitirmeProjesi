import {connect} from 'react-redux';
import Home from '../components/Home';
import {
    setSize,
    calculateSize
} from '../module/home';

const mapStateToProps=(state)=>({
    size:state.home.size || {}
});

const mapActionCreators={
    setSize,calculateSize
    
}
export default connect(mapStateToProps,mapActionCreators)(Home);