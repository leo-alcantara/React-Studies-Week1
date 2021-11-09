import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableAction = () => {
  return (
    <button type="button" className="btn btn-danger">
      Delete
    </button>
  );
};

const TableRow = () => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>Daryl</td>
        <td><TableAction /></td>
    </tr>
    <tr>
        <td>2</td>
        <td>Michone</td>
        <td><TableAction /></td>
    </tr>
    <tr>
        <td>3</td>
        <td>Rick Grimmes</td>
        <td><TableAction /></td>
      </tr>
    </tbody>
  );
};

const Table = () => {
  return (
    <div className="container">
      <table className="table">
        <TableHeader />
        <TableRow />
      </table>
    </div>
  );
};

export default Table;
