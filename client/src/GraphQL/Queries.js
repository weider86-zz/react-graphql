import { gql } from '@apollo/client';

const LOAD_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      email
      password
    }
  }
`;

export { LOAD_USERS };
