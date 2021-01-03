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
  const chairmanTemplate = require.resolve("./src/templates/chairman.js")
  // const markdownPageTemplate = require.resolve("./src/templates/markdown-page.js")
  const mdLauncherTemplate = require.resolve("./src/templates/md-launcher.js")
  const mdSpacecraftTemplate = require.resolve("./src/templates/md-spacecraft.js")

  const result = await graphql(`
    query {
      allGalleriesImageYaml {
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
      allMdLauncherYaml {
        edges {
          node {
            slug
            tag
          }
        }
      }
      allMdSpacecraftYaml {
        edges {
          node {
            slug
            tag
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


  result.data.allGalleriesImageYaml.edges.forEach(({ node }) => {
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
      component: chairmanTemplate,
      context: {
        slug: node.slug,
      }
    })
  })

  result.data.allMdLauncherYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: mdLauncherTemplate,
      context: {
        slug: node.slug,
        tag: node.tag,
      }
    })
  })

  result.data.allMdSpacecraftYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: mdSpacecraftTemplate,
      context: {
        slug: node.slug,
        tag: node.tag,
      }
    })
  })

  // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   createPage({
  //     path: node.frontmatter.slug,
  //     component: markdownPageTemplate,
  //     context: {
  //       slug: node.frontmatter.slug,
  //     }
  //   })
  // })


}
