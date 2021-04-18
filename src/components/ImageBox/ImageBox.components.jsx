import React from "react";
import "./ImageBox.styles.css";
import { withRouter } from "react-router-dom";

const ImageBox = ({ title, imgUrl, routeUrl, history }) => {
  
  return (
    <div className="menu-item" onClick={() => history.push(routeUrl)}>
    <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="menu-background"
      >
        <div className="content">
          <h2>{title}</h2>
          <p>Shop NOW</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ImageBox);
