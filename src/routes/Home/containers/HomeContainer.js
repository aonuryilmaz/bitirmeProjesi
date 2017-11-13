import {connect} from 'react-redux';
import Home from '../components/Home';
import {userLogin} from '../module/home';

const mapStateToProps=(state)=>({
    user:state.home.user || {}
});

const mapActionCreators={
    userLogin
}
export default connect(mapStateToProps,mapActionCreators)(Home);