import styles from "./page.module.css";
import React from "react";
import { Header } from "./storybook/organisms/Layout";
import { Text } from "./storybook/atoms/Text";
import { Skeleton } from "./storybook/atoms/Skeleton";
import { GET_TESTIMONIALS } from "./hooks/useTestimonials/queries";
import { getClient } from "../../apollo/apolloClient";

export default async function Page() {

  const { data, loading } = await getClient().query({
    query: GET_TESTIMONIALS,
  });

  return (
    <main className={styles.main}>
      <Header />
      <Text align="center" bold={true} size="large" color="primary">
        Trusted by Agencies <br></br> & Store Owners
      </Text>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          {data?.getTestimonials?.map((testimonial, index) => (
            <div className="card-container" key={testimonial.tId}>
              <div className="card-loader">
                <Text align="center" bold={true} size="small" color="primary">
                  {testimonial.description}
                </Text>
              </div>
            </div>
          ))}
        </>
      )}
    </main>
  );
}
