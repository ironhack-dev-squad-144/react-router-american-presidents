import React from "react";
import presidents from "../../presidents";
import { Link } from "react-router-dom";

export default function ListPresidents() {
  return (
    <div>
      <h1>List of American Presidents</h1>
      <table className="table-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {presidents.map(({ president, number, birth_year }) => {
            return (
              <tr key={number}>
                <td>{number}</td>
                <td>{president}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/president-detail`,
                      president_info: {
                        president: president,
                        president_number: number,
                        birth_year: birth_year
                      }
                    }}
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
