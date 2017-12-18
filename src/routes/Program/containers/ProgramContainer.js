import {connect} from 'react-redux';
import Program from '../components/Program';

const mapStateToProps=(state)=>({
    result:state.home.sizeresult||{}
});

const mapActionCreators={   
    
}
export default connect(mapStateToProps,mapActionCreators)(Program)