import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 420px;
`;

const Poster = styled.div`
  background-image: url(${props => props.bg});
`;

export default ({ id, medium_cover_image }) => (
  <Container>
    <Link to={`/${id}`}>
      <Poster bg={medium_cover_image} />
    </Link>
  </Container>
);
