import { gql } from '@apollo/client';

export const GET_TESTIMONIALS = gql`
  query getTestimonials {
    getTestimonials {
      tId
      title
      description
      clientId
      TState
      createAt
    }
  }
`;
