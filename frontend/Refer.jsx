
import React from 'react';


const Refer = ({ pageData }) => {
  return (
    <div className="table-section">
      <h3>Referred Users</h3>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Users</th>
            <th>Referred ID</th>
            <th>Status</th>
            <th>Value</th>
            <th>Earnings</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map(user => (
            <tr key={user.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{user.name}</td>
              <td>{user.referredId}</td>
              <td className={`status ${user.status.toLowerCase()}`}>
                {user.status}
              </td>
              <td>${user.value}</td>
              <td>${user.earnings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Refer;



