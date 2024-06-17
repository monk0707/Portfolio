import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        {/* Days I <strong className="purple">Code</strong> */}
      </h1>
      {/* <LeetCodeCalendar
        username="soumyajit4419"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      /> */}

      {/* <CalendarHeatmap
        startDate={new Date('2016-01-01')}
        endDate={new Date('2016-04-01')}
        values={[
          // { date: '2016-01-01', count: 12 },
          // { date: '2016-01-22', count: 122 },
          // { date: '2016-01-30', count: 38 },
          // ...and so on
        ]}
      /> */}
    </Row>
  );
}

export default Github;
