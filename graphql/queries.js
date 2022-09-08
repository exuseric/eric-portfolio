// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag';

export const contentQuery = (page) => {
  const query = gql`query getContent {
		${page} {
			data {
				attributes {
					Content
				}
			}
		}
	}`;

  return query.loc.source.body;
};

export const heroQuery = (page) => {
  const query = gql`query getHero {
		${page} {
			data {
				attributes {
					Hero {
						Title
						Description
						CallToAction
            CallToActionLink
						Cover {
							data {
								attributes {
									url
									width
									height
									alternativeText
								}
							}
						}
					}
				}
			}
		}
	}`;

  return query.loc.source.body;
};

export const featuredProjects = () => {
  const query = gql`
    query getProjects {
      homePage {
        data {
          attributes {
            Featured {
              Title
              Projects {
                data {
                  id
                  attributes {
                    Title
                    Description
                    HostedUrl
                    RepoUrl
                    DesignUrl
                    Cover {
                      data {
                        attributes {
                          url
                          width
                          height
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  return query.loc.source.body;
};
