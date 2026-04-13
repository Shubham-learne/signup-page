import { Table } from "antd";
import { Link } from "react-router-dom";

function Dashboard() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address2",
      dataIndex: "address",
      key: "address",
    },
  ];
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      number: 9817345612,
      email: "mike@yahoo.com",
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      number: 8285239408,
      email: "john@gmail.com",
      address: "10 Downing Street",
    },
    {
      key: "3",
      name: "Denver",
      number: 8582397612,
      email: "denver@gmail.com",
      address: "10 Downing Street",
    },
    {
      key: "4",
      name: "Steve",
      number: 8825397612,
      email: "steve@yahoo.com",
      address: "10 Downing Street",
    },
    {
      key: "5",
      name: "Robert",
      number: 8482097612,
      email: "robert@yahoo.com",
      address: "10 Downing Street",
    },
  ];

  return (
    <>
      <header
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "55px",
          padding: "15px 60px",
          background: "#000",
          color: "#fff",
          height: "90px",
        }}
      >
        <div
          className="logo"
          style={{ fontSize: "36px", fontWeight: "600", margin: 0, padding: 0 }}
        >
          <p>Dashboard</p>
        </div>

        <div className="list" style={{ display: "flex", gap: "22px" }}>
          <Link to="" style={{ fontSize: "18px" }}>
            Home
          </Link>
          <Link to="" style={{ fontSize: "18px" }}>
            List
          </Link>
          <Link to="" style={{ fontSize: "18px" }}>
            App
          </Link>
        </div>
      </header>

      <div
        style={{ background: "#f5f5f5", height: "700px", padding: "40px 40px" }}
      >
        <div style={{ background: "#fff", padding: "15px", height: "700px" }}>
          <h2 style={{ fontSize: "50px", color: "#000" }}>Content</h2>
          {/* <Table columns={columns} dataSource={dataSource} /> */}

          <table border="1" width="100%" cellPadding="10" style={{color:"black"}}>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key}>{column.title}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {dataSource.map((item) => (
                <tr key={item.key}>
                  {columns.map((column) => (
                    <td key={column.key}>{item[column.dataIndex]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <footer
        className="footer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "20vh",
          background: "#f5f5f5",
          color: "#000",
        }}
      >
        <p>Design ©2026 Created by UED</p>
      </footer>
    </>
  );
}

export default Dashboard;
