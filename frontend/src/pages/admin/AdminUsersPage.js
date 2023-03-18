import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const AdminUsersPage = () => {
  const deleteHandler = () => {
    if (window.confirm("Are you sure?")) alert("User deleted");
  };
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>Orders</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>Mark </td>
                  <td>Twain</td>
                  <td>mark@gmail.com</td>
                  <td>
                    <i className={item} />
                  </td>
                  <td>
                    <LinkContainer to="/admin/order-details">
                      <Button className="btn-sm">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </LinkContainer>
                    {" / "}
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={deleteHandler}
                    >
                      <i className="bi bi-x-circle"></i>
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminUsersPage;
