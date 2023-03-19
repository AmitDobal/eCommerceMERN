import { Col, Form, Row } from "react-bootstrap";
import AdminLinkComponent from "../../components/admin/AdminLinksComponent";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminAnalyticsPage = () => {
  const data = [
    {
      name: "12:00 AM",
      "2022 year": 4273,
      "2021 year": 5767,
    },
    {
      name: "12:10 AM",
      "2022 year": 4428,
      "2021 year": 6254,
    },
    {
      name: "12:20 AM",
      "2022 year": 4845,
      "2021 year": 6742,
    },
    {
      name: "12:30 AM",
      "2022 year": 5129,
      "2021 year": 7071,
    },
    {
      name: "12:40 AM",
      "2022 year": 5352,
      "2021 year": 7386,
    },
    {
      name: "12:50 AM",
      "2022 year": 5508,
      "2021 year": 7661,
    },
    {
      name: "01:00 AM",
      "2022 year": 5701,
      "2021 year": 7933,
    },
    {
      name: "01:10 AM",
      "2022 year": 6053,
      "2021 year": 8273,
    },
    {
      name: "01:20 AM",
      "2022 year": 6427,
      "2021 year": 8558,
    },
    {
      name: "01:30 AM",
      "2022 year": 6774,
      "2021 year": 8763,
    },
    {
      name: "01:40 AM",
      "2022 year": 7108,
      "2021 year": 8952,
    },
    {
      name: "01:50 AM",
      "2022 year": 7428,
      "2021 year": 9119,
    },
    {
      name: "02:00 AM",
      "2022 year": 7591,
      "2021 year": 9265,
    },
    {
      name: "02:10 AM",
      "2022 year": 7661,
      "2021 year": 9388,
    },
    {
      name: "02:20 AM",
      "2022 year": 7661,
      "2021 year": 9486,
    },
    {
      name: "02:30 AM",
      "2022 year": 7573,
      "2021 year": 9564,
    },
    {
      name: "02:40 AM",
      "2022 year": 7386,
      "2021 year": 9616,
    },
    {
      name: "02:50 AM",
      "2022 year": 7091,
      "2021 year": 9641,
    },
    {
      name: "03:00 AM",
      "2022 year": 6818,
      "2021 year": 9634,
    },
    {
      name: "03:10 AM",
      "2022 year": 6585,
      "2021 year": 9597,
    },
  ];

  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinkComponent />
      </Col>
      <Col md={10}>
        <h1>Black Friday Cumulative Revenue 11/26/2022 vs 11/27/2021</h1>
        <Form.Group controlId="firstDateToCompare">
          <Form.Label>Select First Date To Compare</Form.Label>
          <Form.Control
            type="date"
            name="firstDateToCompare"
            placeholder="First date to compare"
          />
        </Form.Group>
        <br />
        <Form.Group controlId="secondDateToCompare">
          <Form.Label>Select Second Date To Compare</Form.Label>
          <Form.Control
            type="date"
            name="secondDateToCompare"
            placeholder="Second date to compare"
          />
        </Form.Group>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{
                value: "TIME",
                offset: 50,
                position: "insideBottomRight",
              }}
            />
            <YAxis
              label={{ value: "REVENUE $", angle: -90, position: "insideLeft" }}
              allowDuplicatedCategory={false}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="2021 year"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={4}
            />
            <Line
              type="monotone"
              dataKey="2022 year"
              stroke="#82ca9d"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
};

export default AdminAnalyticsPage;
