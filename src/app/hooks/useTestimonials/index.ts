import { useQuery } from '@apollo/client';
import { GET_TESTIMONIALS } from './queries'
import { getClient } from "../../../../apollo/apolloClient";

export const useTestimonials = async () => {
    const { data, loading, error } = await getClient().query({ query: GET_TESTIMONIALS });
    return [data, {loading, error}]
 }