import React from "react";
import { USERS } from "../../src/api/queries";
import { User } from "../../src/types";
import client from "../../src/api/client";
import { GetStaticPropsContext } from "next";
import { logError } from "../../src/utils/errors";

type UserPageParams = {
  userName: string;
};

const UserPage = ({ user, params }: { user: User; params: UserPageParams }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start ",
      }}
    >
      {params.userName}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center ",
        }}
      ></div>
      <div style={{ display: "flex", flexDirection: "column" }}></div>
    </div>
  );
};

export default UserPage;

export async function getStaticPaths() {
  let paths: any[] = [];
  await client.query({ query: USERS }).then(
    (res) => {
      res.data.users.forEach((user: User) => {
        paths.push({
          params: {
            userName: user.name,
          },
        });
      });
    },
    (err) => {
      logError(err);
    }
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  /* fetch(BACKEND_URL).then(
    (res) => console.log(res),
    (err) => console.log(err)
  ); */
  let staticProps: any = {
    props: {
      params: context.params,
      user: null,
    },
    revalidate: 10,
    /* revalidate - An optional amount in seconds after which a page re-generation can occur. Defaults to false.
    When revalidate is false it means that there is no revalidation, so the page will be cached as built until the next build. */
  };

  /*   await client
    .query({
      query: USER,
      variables: {},
      fetchPolicy: "no-cache",
    })
    .then(
      (res) => {
        staticProps.props.user = res.data.user;
      },
      (err: ApolloError) => {
        logError(err);
      }
    ); */
  return staticProps;
}
