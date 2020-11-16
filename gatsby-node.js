/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const fs = require("fs")
// const yaml = require("js-yaml")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const imageGalleryTemplate = require.resolve("./src/templates/image-gallery.js")
  const launcherDetailTemplate = require.resolve("./src/templates/launcher-detail.js")
  const missionDetailTemplate = require.resolve("./src/templates/mission-detail.js")
  const isroCentreTemplate = require.resolve("./src/templates/isro-centre.js")
  const autonomousBodyTemplate = require.resolve("./src/templates/autonomous-body.js")
  const profileTemplate = require.resolve("./src/templates/profile.js")
  const markdownPageTemplate = require.resolve("./src/templates/markdown-page.js")


  const result = await graphql(`
    query {
      allImageGalleriesYaml {
        edges {
          node {
            slug
            imagesDir
          }
        }
      }
      allLaunchersDetailYaml {
        edges {
          node {
            slug
          }
        }
      }
      allMissionsDetailYaml {
        edges {
          node {
            slug
          }
        }
      }
      allIsroCentresYaml {
        edges {
          node {
            slug
          }
        }
      }
      allAutonomousBodiesYaml {
        edges {
          node {
            slug
          }
        }
      }
      allChairmenYaml {
        edges {
          node {
            slug
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }


  result.data.allImageGalleriesYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: imageGalleryTemplate,
      context: {
        slug: node.slug,
        imagesDir: `/${node.imagesDir}/`,
      }
    })
  })

  result.data.allLaunchersDetailYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: launcherDetailTemplate,
      context: {
        slug: node.slug,
        // imagesDir: `/${node.imagesDir}/`,
      }
    })
  })

  result.data.allMissionsDetailYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: missionDetailTemplate,
      context: {
        slug: node.slug,
        // filterRegex: `/${node.updates.filter}/`
      }
    })
  })

  result.data.allIsroCentresYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: isroCentreTemplate,
      context: {
        slug: node.slug,
      }
    })
  })

  result.data.allAutonomousBodiesYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: autonomousBodyTemplate,
      context: {
        slug: node.slug,
      }
    })
  })

  result.data.allChairmenYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: profileTemplate,
      context: {
        slug: node.slug,
      }
    })
  })

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: markdownPageTemplate,
      context: {
        slug: node.frontmatter.slug,
      }
    })
  })


}
