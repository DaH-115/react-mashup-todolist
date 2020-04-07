import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 510px;
  height: 760px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 96px auto; /* 화면 중앙 */

  display: flex;
  flex-direction: column; /* 위 ->아래 */
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
