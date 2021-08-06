import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  componentWillMount() {}

  componentDidMount() {
    axios.get(`https://random.dog/woof.json`).then((res) => {
      this.setState({
        url: res.data.url,
      });
    });
  }

  render() {
    return (
      <div>
        <img
          style={{ height: "40vh", width: "50vw" }}
          src={this.state.url}
          alt=""
        />
      </div>
    );
  }
}

dogs.propTypes = {};

export default dogs;
