import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import Title from "./components/Title";
import { addFeature, removeFeature, updateTotal } from "./actions";
import { connect } from "react-redux";

const App = props => {
  const removeItem = item => {
    // console.log(item);
    // dispatch an action here to remove an item
    props.removeFeature(item);
    props.updateTotal(item);
  };

  const buyItem = item => {
    // console.log(item);
    // dipsatch an action here to add an item
    props.addFeature(item);
    props.updateTotal(item);
  };

  return (
    <div className="app">
      <Title />
      <div className="boxes">
        <div className="box">
          <Header />
          <AddedFeatures removeItem={removeItem} />
        </div>
        <div className="box">
          <AdditionalFeatures buyItem={buyItem} />
          <Total />
        </div>
      </div>
    </div>
  );
};

// export default App;
const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { addFeature, removeFeature, updateTotal }
)(App);
