import React from "react";
import { Progress, Typography } from "antd";
import { Card, Button } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Success() {
  const success = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // display: "grid",
    // gridTemplateColumns: "50% 50%",
    gap: "20rem",
    marginTop: "100px",
  };
  const leftcontent = {
    display: "flex",
    flexDirection: "column",
    // justifyContent:"center",
    alignItems: "center",
    // fontSize:"5rem",
    gap: "3rem",
  };
  const heading = {
    fontSize: "30px",
    // textAlign:"center"
  };
  const address = {
    fontSize: "23px",
  };
  const right = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const { Meta } = Card;
  const checkoutMeals = useSelector((state) => state.meal.checkoutMeal);

  return (
    <>
      <div style={success}>
        <div style={leftcontent}>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
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
                </div>
              ))}
          </div>
          <div style={{ fontSize: "4rem" }}>Successfully purchesed</div>
          <div>
            <Progress type="circle" percent={100} />
          </div>
        </div>
        <div style={right}>
          <h2 style={heading}>Shipping Address</h2>
          <Typography style={address}>Logeshwaran</Typography>
          <Typography style={address}>logeshwaran@gmail.com</Typography>
          <Typography style={address}>9599448833</Typography>
          <Typography style={address}>3/756 main road chinthamani</Typography>
          <Typography style={address}>3/756 main road chinthamani</Typography>
          <Typography style={address}>605601</Typography>
          <Link to={'/mealcard/meals'}>
            <Button
              block
              style={{ fontSize: "20px", height: "50px", marginTop:"50px" }}
              type="primary"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
