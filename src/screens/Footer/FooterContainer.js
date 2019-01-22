import { connect } from 'react-redux';
import * as footerActions from '../../store/footer/actions';
import AppFooter from './Footer.js';

const mapStateToProps = (state) => ({
  mode: state.footer.mode,  
});

const mapDispatchToProps = (dispatch) => ({
  setMode: (mode) => dispatch(footerActions.setMode(mode)),
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(AppFooter);
