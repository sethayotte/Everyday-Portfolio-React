import React from "react";
import { Statistic } from "antd";

class DayGain extends React.Component {
  render() {
    return (
      <div>
        <Statistic
          value={13073.12}
          valueStyle={{
            color: "#0FBE00",
            fontFamily: "Calistoga",
            fontSize: "52px",
          }}
          prefix="$"
        />
        <Statistic
          value={7.2}
          valueStyle={{
            color: "#0FBE00",
            fontFamily: "Calistoga",
            fontSize: "52px",
          }}
          prefix="("
          suffix="%)"
        />
      </div>
    );
  }
}

export default DayGain;
