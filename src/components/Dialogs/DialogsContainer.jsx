import { connect } from "react-redux";
import { compose } from "redux";
import { addNewMessageCreator } from "../../Redux/dialogs-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (text) => {
      dispatch(addNewMessageCreator(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
