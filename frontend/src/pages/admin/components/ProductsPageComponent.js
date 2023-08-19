import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";
import { useEffect, useState } from "react";

const ProductsPageComponent = ({ fetchProducts, deleteProduct }) => {
  //States
  const [products, setProducts] = useState([]);
  const [isProductDeleted, setIsProductDeleted] = useState(false);

  //handlers
  const deleteHandler = async (productId) => {
    if (window.confirm("Are you sure?")) {
      const data = await deleteProduct(productId);
      if (data.message && data.message === "product removed") {
        setIsProductDeleted(!isProductDeleted);
      }
    }
  };

  //Effect
  useEffect(() => {
    const abctrl = new AbortController();
    fetchProducts(abctrl)
      .then((res) => setProducts(res))
      .catch((er) =>
        setProducts([
          {
            name: er.response.data.message
              ? er.response.data.message
              : er.response.data,
          },
        ])
      );
  }, [isProductDeleted]);

  //Render HTMl
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>
          Product List{" "}
          <LinkContainer to={`/admin/create-new-product/`}>
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
            {products.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <LinkContainer to={`/admin/edit-product/${item._id}`}>
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square" />
                    </Button>
                  </LinkContainer>
                  {" / "}
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(item._id)}
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

export default ProductsPageComponent;
