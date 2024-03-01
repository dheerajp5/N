import "./Attendence.css";
const statusMap = {
  Present: 'success',
  Weekend: 'warning',
};


const AttendanceTable = () => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Date</th>
          <th>First Check In</th>
          <th>Last Check Out</th>
          <th>Time</th>
          <th>HR Comment</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01-02-2024</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>
            <span className={`badge bg-${statusMap.Present}`}>Present</span>
          </td>
        </tr>
        <tr>
          <td>02-02-2024</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>
            <span className={`badge bg-${statusMap.Present}`}>Present</span>
          </td>
        </tr>
        <tr>
          <td>03-02-2024</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>
            <span className={`badge bg-${statusMap.Present}`}>Present</span>
          </td>
        </tr>
        <tr>
          <td>04-02-2024</td>
          <td>Not Checked In</td>
          <td>Not Checked In</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>
            <span className='badge-danger'>Weekend</span>
          </td>
        </tr>
        <tr>
          <td>05-02-2024</td>
          <td>Not Checked In</td>
          <td>Not Checked In</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>
            <span className={`badge-danger`}>Weekend</span>
          </td>
        </tr>
        <tr>
          <td>06-02-2024</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>
            <span className={`badge bg-${statusMap.Present}`}>Present</span>
          </td>
        </tr>
        <tr>
          <td>07-02-2024</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>09:21 AM</td>
          <td>
            <span className={`badge bg-${statusMap.Present}`}>Present</span>
          </td>
        </tr>
        <tr>
          <td>08-02-2024</td></tr></tbody></table>
  );
};
export default AttendanceTable;