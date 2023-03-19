import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const deleteHandler = () => {
  if (window.confirm("Are you sure?")) alert("Product Delted!");
};
const AdminProductsPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>
          Product List{" "}
          <LinkContainer to="/admin/create-new-product">
            <Button variant="primary" size="lg">
              Create new Product
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: "Samsung Galaxy S21 Ultra",
                price: 1199.99,
                category: "Electronics",
              },
              {
                name: "Apple MacBook Air M1",
                price: 999.99,
                category: "Computers",
              },
              {
                name: "Sony WH-1000XM4 Wireless Headphones",
                price: 349.99,
                category: "Electronics",
              },
              {
                name: "Nike Air Max 270 React",
                price: 150.0,
                category: "Footwear",
              },
              {
                name: "Patagonia Better Sweater Fleece Jacket",
                price: 139.0,
                category: "Clothing",
              },
              {
                name: "Nintendo Switch Lite",
                price: 199.99,
                category: "Electronics",
              },
              {
                name: "Canon EOS Rebel T7 DSLR Camera",
                price: 499.99,
                category: "Electronics",
              },
              {
                name: "Adidas Ultraboost 21",
                price: 180.0,
                category: "Footwear",
              },
              {
                name: "Levi's 501 Original Fit Jeans",
                price: 69.5,
                category: "Clothing",
              },
              {
                name: "Dyson Cyclone V10 Absolute Cordless Vacuum",
                price: 549.99,
                category: "Home & Kitchen",
              },
            ].map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <LinkContainer to="/admin/edit-product">
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square" />
                    </Button>
                  </LinkContainer>
                  {" / "}
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={deleteHandler}
                  >
                    <i className="bi bi-x-circle" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminProductsPage;
