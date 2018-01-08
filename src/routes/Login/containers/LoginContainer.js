import {connect} from 'react-redux';
import Login from '../components/Login';

const mapStateToProps=(state)=>({
    result:state.home.sizeresult||{}
});

const mapActionCreators={   
    
}
export default connect(mapStateToProps,mapActionCreators)(Login)