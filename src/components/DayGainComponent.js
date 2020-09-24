import React from "react";
import { Statistic } from "antd";

class DayGain extends React.Component {
    render() {
        return (
            <Statistic
                value={13073.12}
                valueStyle={{ color: "#0FBE00", fontFamily: 'Calistoga', fontSize: '48px' }}                
                prefix="$"
              />
        );
    }
}

export default DayGain;