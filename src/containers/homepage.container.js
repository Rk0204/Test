import { connect } from "react-redux";
import HomePage from "../components/homepage";
import { getProfile } from "../actions/asyncactions";

const mapStateToProps = state => {
  return {
    profileData: state.home.profileData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(getProfile())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
