import styled from "@emotion/styled";

export const Sidebar = styled.section`
  flex: 1;
  height: 100%;
  background: blue;
  position: sticky;
  .wrapper {
    padding: 20px;
    .menu {
      margin-bottom: 2rem;
      h3 {
        font-size: 20px;
        color: #fff;
      }
      ul {
        padding: 0.5rem;
        li {
          padding: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          &:active,
          &:hover {
            background: #fff;
          }
        }
      }
    }
  }
`;
