import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(
  'https://api-eu-west-2.hygraph.com/v2/cl7x9yrrp2qxd01ul9m6e436m/master'
);

export default (_, inject) => {
  inject('hygraph', hygraph);
};
