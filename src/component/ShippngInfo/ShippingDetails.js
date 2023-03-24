import React, { useState } from "react";
import { useSelector } from "react-redux";
import { card, btn, Category, heading } from "./ShippingDetails.style";
import { Link } from "react-router-dom";
import { Select, Input, Card, Form, Typography, Button } from "antd";

// const [formValues, setFormValues] = useState({
//   firstName: {
//     value: "",
//   },
//   lastName: {
//     value: "",
//   },
//   Email: {
//     value: "",
//   },
//   mobile: {
//     value: "",
//   },
//   address1: {
//     value: "",
//   },
//   address2: {
//     value: "",
//   },
//   Zipcode: {
//     value: "",
//   },
// });

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormValues({
//     ...formValues,
//     [name]: {
//       ...formValues[name],
//       value,
//     },
//   });
// };




export default function ShippingDetails() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const { Meta } = Card;
  const checkoutMeals = useSelector((state) => state.meal.checkoutMeal);

  return (
    <React.Fragment>
      {console.log(checkoutMeals)}
      {checkoutMeals && (
        <div style={card}>
          <div>
            {checkoutMeals &&
              checkoutMeals.map((item) => (
                <div style={{ display: "flex" }}>
                  <div>
                    <Card
                      hoverable
                      style={{ width: 130 }}
                      cover={<img alt="example" src={item.strMealThumb} />}
                    >
                      <Meta title={item.strMeal} description={item.strArea} />
                    </Card>
                  </div>
                  <div style={Category}>
                    <div>
                      <span style={{ color: "gray" }}>Category:</span>{" "}
                      {item.strCategory}
                    </div>
                    <div>
                      <span style={{ color: "gray" }}>Tags:</span>{" "}
                      {item.strTags}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div>
            <div>
              <Form labelCol={{ span: 3 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Form.Item>
                    <div style={heading}>Shipping Details</div>
                    <Select
                      defaultValue="Title"
                      style={{
                        width: 120,
                        // paddingLeft:"50px"
                        marginLeft: "110px",
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "Mr.",
                          label: "Mr.",
                        },
                        {
                          value: "Mrs.",
                          label: "Mrs.",
                        },
                        {
                          value: "Ms.",
                          label: "Ms.",
                        },
                      ]}
                    />
                  </Form.Item>

                  <Form.Item
                    name="first Name"
                    label="first Name"
                    hasFeedback
                    onChange={handleChange}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter First Name",
                      },
                      {
                        min: 3,
                      },
                    ]}
                  >
                    <Input size="large" placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    name="Last Name"
                    label="Last Name"
                    hasFeedback
                    onChange={handleChange}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Last Name",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Last Name" />
                  </Form.Item>
                  <Form.Item
                    name="Email"
                    label="Enter e-mail"
                    hasFeedback
                    onChange={handleChange}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Email",
                      },
                      {
                        type: "email",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="E-mail" />
                  </Form.Item>
                  <Form.Item
                    name="Number"
                    label="Number"
                    hasFeedback
                    onChange={handleChange}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Your Number",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Mobile Number" />
                  </Form.Item>
                  <Form.Item
                    name="Address"
                    label="Address"
                    hasFeedback
                    onChange={handleChange}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Your Address1",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Street Address" />
                  </Form.Item>
                  <Form.Item
                    name="Address 2"
                    label="Address 2"
                    hasFeedback
                    onChange={handleChange}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Your Address2",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Street Address Line 2" />
                  </Form.Item>
                  <Form.Item
                    name="ZipCode"
                    label="Zipcode"
                    hasFeedback
                    onChange={handleChange}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Zipcode",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Zip Code" />
                  </Form.Item>
                  <Form.Item wrapperCol={{ span: 24 }}>
                    <Link to={`/mealcard/purches`}>
                      <button block type="primary" htmlType="submit" style={btn}>Purchase</button>
                    </Link>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
