import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mealsData } from "../../features/user";
import { search, card } from "./HomeList.style";

const { Meta } = Card;
const { Search } = Input;

export default function HomeList() {
  const dispatch = useDispatch();

  const [posts, setPosts] = useState();

  const onSearch = (value) => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + value)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // dispatch(mealsData(data));
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(mealsData(data));
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const navigate = useNavigate();
  const navigateToDetail = (id) => navigate(`/mealcard/view/${id}`);

  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Search
          placeholder="Search recipee"
          onSearch={onSearch}
          size="large"
          style={search}
        />
      </div>
      <div style={card}>
        {posts &&
          posts.meals.slice(0, 10).map((item, index) => (
            <Card
              style={{ width: 350 }}
              hoverable
              cover={<img alt="example" src={item.strMealThumb} />}
              onClick={() => navigateToDetail(item.idMeal)}
            >
              {console.log(item)}
              <Meta title={item.strMeal} description={item.strArea} />
            </Card>
          ))}
      </div>
    </>
  );
}
