import React from "react";
import { Button } from "antd";
const Table = (props) => {
  const { data } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>CATEGORY</th>
          <th>CONFIGURATION NAME</th>
          <th>DISPLAY NAME</th>
          <th>DATATYPE</th>
          <th>DESCRIPTION</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td class="a">{item.CATEGORY}</td>
            <td class="b">{item.CONFIGURATION}</td>
            <td class="c">{item.DISPLAY}</td>
            <td class="d">{item.DATATYPE}</td>
            <td class="e">{item.DESCRIPTION}</td>
            <td class="f">
              <Button type="button" id="clarify">
                EDIT
              </Button>{" "}
              <Button type="button" id="delete">
                DELETE
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;