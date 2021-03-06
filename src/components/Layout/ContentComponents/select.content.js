import React from "react";
import { connect } from "react-redux";
import PageRibbon from "../../Layout/ContentComponents/ribbon";
import SamplePage from "../../pages/Tests/sample";
import Test1 from "../../pages/Tests/test1";
import Test2 from "../../pages/Tests/test2";
import Test3 from "../../pages/Tests/test3";
import Tables1 from "../../pages/Tests/tables1";

class SelectContent extends React.Component {
  actionHandler = action => {
    this.props.action(action);
  };

  getRibbons = array => {
    console.log(array);
  };

  render = () => {
    let return_value;
    switch (this.props.path) {
      case "/":
        return_value = (
          <SamplePage ribbon={this.ribbon} action={this.actionHandler} />
        );
        break;
      case "/test1":
        return_value = <Test1 />;
        break;
      case "/test2":
        return_value = <Test2 />;
        break;
      case "/test3":
        return_value = <Test3 />;
        break;
      case "/tables1":
        return_value = <Tables1 />;
        break;

      default:
        return "";
    }

    return (
      <div id="main" role="main"
      style={{ 
        minHeight: "300px", 
        height: "730px" 
      }}>
        <PageRibbon action={this.actionHandler} />
        {return_value}
      </div>
    );
  };
}

function mapStateToProps(state) {
  let ret = {
    items: state.ui.sideBar.items
  };
  return ret;
}

export default connect(mapStateToProps, null)(SelectContent);
