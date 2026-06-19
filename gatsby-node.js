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
  const launcherShowcaseTemplate = require.resolve("./src/templates/launcher-showcase.js")
  const missionShowcaseTemplate = require.resolve("./src/templates/mission-showcase.js")
  const isroCentreTemplate = require.resolve("./src/templates/isro-centre.js")
  const autonomousBodyTemplate = require.resolve("./src/templates/autonomous-body.js")
  const chairmanTemplate = require.resolve("./src/templates/chairman.js")
  const launcherPageTemplate = require.resolve("./src/templates/launcher-page.js")
  const spacecraftPageTemplate = require.resolve("./src/templates/spacecraft-page.js")
  const astrosatPageTemplate = require.resolve("./src/templates/astrosat-page.js")
  const momPageTemplate = require.resolve("./src/templates/mars-orbiter-mission-page.js")
  const publicationsPageTemplate = require.resolve("./src/templates/publications-page.js")
  const spacecraftTypeTemplate = require.resolve("./src/templates/spacecraft-type.js")
  const generalPostTemplate = require.resolve("./src/templates/general-post.js")




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
      allLaunchersShowcaseYaml {
        edges {
          node {
            slug
            launcherTypeKeyword
          }
        }
      }
      allMissionsShowcaseYaml {
        edges {
          node {
            slug
            tag
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
      allLauncherPagesYaml {
        edges {
          node {
            slug
            tag
          }
        }
      }
      allSpacecraftPagesYaml {
        edges {
          node {
            slug
            tag
          }
        }
      }
      allAstrosatPagesYaml {
        edges {
          node {
            slug
          }
        }
      }
      allMarsOrbiterMissionPagesYaml {
        edges {
          node {
            slug
          }
        }
      }
      allPublicationsPagesYaml {
        edges {
          node {
            slug
          }
        }
      }
      allSpacecraftTypesYaml {
        edges {
          node {
            slug
            spacecraftType
          }
        }
      }
      allGeneralPostsYaml {
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

  result.data.allLaunchersShowcaseYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: launcherShowcaseTemplate,
      context: {
        slug: node.slug,
        launcherTypeRegex: `/${node.launcherTypeKeyword}\\b/`,
      }
    })
  })

  result.data.allMissionsShowcaseYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: missionShowcaseTemplate,
      context: {
        slug: node.slug,
        tag: node.tag,
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

  result.data.allLauncherPagesYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: launcherPageTemplate,
      context: {
        slug: node.slug,
        tag: node.tag,
      }
    })
  })

  result.data.allSpacecraftPagesYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: spacecraftPageTemplate,
      context: {
        slug: node.slug,
        tag: node.tag,
      }
    })
  })

  result.data.allAstrosatPagesYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: astrosatPageTemplate,
      context: {
        slug: node.slug,
      }
    })
  })

  result.data.allMarsOrbiterMissionPagesYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: momPageTemplate,
      context: {
        slug: node.slug,
      }
    })
  })

  result.data.allPublicationsPagesYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: publicationsPageTemplate,
      context: {
        slug: node.slug,
      }
    })
  })

  result.data.allSpacecraftTypesYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: spacecraftTypeTemplate,
      context: {
        slug: node.slug,
        spacecraftTypeRegex: `/${node.spacecraftType}/`,
      }
    })
  })

  result.data.allGeneralPostsYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: generalPostTemplate,
      context: {
        slug: node.slug,
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
