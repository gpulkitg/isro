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

  const mediaGalleryTemplate = require.resolve("./src/templates/media-gallery.js")
  const launcherTemplate = require.resolve("./src/templates/launcher.js")

  const result = await graphql(`
    query {
      allGalleriesYaml {
        edges {
          node {
            slug
            imagesDir
          }
        }
      }
      allLaunchersYaml {
        edges {
          node {
            slug
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

  result.data.allGalleriesYaml.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: mediaGalleryTemplate,
        context: {
          slug: node.slug,
          imagesDir: `/${node.imagesDir}/`,
        }
      })
  })

  result.data.allLaunchersYaml.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: launcherTemplate,
        context: {
          slug: node.slug,
          // imagesDir: `/${node.imagesDir}/`,
        }
      })
  })

}
