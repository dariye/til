import React from "react";
import cookie from "cookie";
import { Query } from "react-apollo";
import gql from 'graphql-tag'

import redirect from "../lib/redirect";
import checkLoggedIn from "../lib/checkLoggedIn";



const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      id
      title
      content
      createdAt
      author {
        name
      }
    }
  }
`
class Feed extends React.Component {
  state = {

  }
  render() {
    const  { feed } = this.props
    return (
      <div>
        <ul>
          {
            feed.map((feedItem) => {
              return <li key={feedItem.id}>{feedItem.title}</li>
            } )
          }
        </ul>
      </div>
    )
  }
}

export default class Index extends React.Component {
  static async getInitialProps(context, apolloClient) {
    //TODO: authenticate user
    // const { loggedInUser } = await checkLoggedIn(context.apolloClient);

    // if (!loggedInUser.user) {
      // If not signed in, send them somewhere more useful
      // redirect(context, "/signin");
    // }

    return { loggedInUser: "test" };
  }

  signout = apolloClient => () => {
    document.cookie = cookie.serialize("token", "", {
      maxAge: -1 // Expire the cookie immediately
    });

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    apolloClient.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, "/signin");
    });
  };

  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, data, error }) => {

          if (error) {
            console.log(error)
          }

          if (loading || !data) {
            return null
          }

          return (
            <div>
              <p>TIL</p>
              <Feed feed={data.feed}/>
            </div>
          )
        }}
      </Query>

    );
  }
}
