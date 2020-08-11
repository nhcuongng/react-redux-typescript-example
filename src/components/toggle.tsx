import * as React from "react";
import { connect } from "react-redux";
import { toggleMessage } from "../actions";
import { Dispatch } from "redux";
import { AppState, IReduxBaseAction } from "../reducers";

const Tg: React.FC<ToggleProps> = ({
  messageVisibility,
  toggleMessage
}) => (
  <div>
    <button onClick={() => toggleMessage(!messageVisibility)}>Toggle</button>
    {messageVisibility && <p>Toggled content</p>}
  </div>
);

/**
 * Đúng như tên của nó, hàm này sẽ lấy state tổng từ ```store``` và đưa chúng vào component dưới dạng ```props```
 * @param state tồng tất cả state
 * @return object
 */
const mapStateToProps = (state: AppState) => ({
  messageVisibility: state.showMessage
});

/**
 * Cũng như hàm ```mapStateToProps``` hàm này return lại một object, chỉ có điều mỗi key của nó là một fuction thay vì giá trị
 * @param dispatch đây là hàm mà redux chung cấp cho chúng ta, dành cho dispatch một action tới reducer
 * @return object
 */
const mapDispatchToProps = (dispatch: Dispatch<IReduxBaseAction>) => ({
  toggleMessage: (messageVisibility: boolean) => dispatch(toggleMessage(messageVisibility))
})

/**
 * Định nghĩa type cho prop của component
 */
type ToggleProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export const Toggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tg);
