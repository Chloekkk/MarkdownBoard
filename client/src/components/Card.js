import React from "react";
import img from "../assets/cat.png";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";

const { Meta } = Card;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const CardPost = ({ title, description, path }) => {
  const cardStyle = {
    width: "280px",
    borderRadius: "15px",
    marginRight: "15px",
    marginLeft: "10px",
    marginBottom: "26px",
  };
  return (
    <Link to={path}>
      <Card
        hoverable
        style={cardStyle}
        cover={<img alt="defaultImage" src={img} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </Link>
  );
};