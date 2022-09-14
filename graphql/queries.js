// eslint-disable-next-line import/no-named-as-default
import { gql } from 'graphql-tag';

export const getProjects = () => {
  const query = gql`
    query {
      projects {
        title
        description
        hostedUrl
        repoUrl
        cover {
          url
          alternativeText
        }
      }
    }
  `;
  return query.loc.source.body;
};

export const getPage = ({ slug }) => {
  const query = gql`
    query {
      page(where: { slug: "${slug}" }) {
        hero {
          title
          description
          callToAction {
            title
            link
          }
          cover {
            url
            width
            height
            alternativeText
          }
        }
        content {
          ... on ContentBlock {
            id
            title
            content {
              markdown
            }
          }
        }
      }
    }
  `;

  return query.loc.source.body;
};
