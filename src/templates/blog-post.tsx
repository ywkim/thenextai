import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Disqus } from "gatsby-plugin-disqus"

interface MarkdownNode {
  id: string
  html: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
    description: string
  }
  excerpt: string
}

interface PreviousNode {
  fields: { slug: string }
  frontmatter: { title: string }
}
interface NextNode {
  fields: { slug: string }
  frontmatter: { title: string }
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
      siteUrl: string
    }
  }
  post: MarkdownNode
  previous: PreviousNode
  next: NextNode
}

interface BlogPostTemplateProps extends PageProps<PageQueryData> {
  pageContext: {
    previousPostId: string
    nextPostId: string
  }
}

interface HeadProps extends PageProps<PageQueryData> {}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  data,
  location,
}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { post, previous, next } = data

  const disqusConfig = {
    url: `${data.site.siteMetadata?.siteUrl + location.pathname}`,
    identifier: post.id,
    title: post.frontmatter.title,
  }

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="mx-auto"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1
            className="text-4xl font-black tracking-tight"
            itemProp="headline"
          >
            {post.frontmatter.title}
          </h1>
          <p className="text-base font-serif mt-4 mb-8">
            {post.frontmatter.date}
          </p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className="prose lg:prose-lg"
        />
        <hr className="border-gray-200 mt-6" />
        <footer className="pt-6 pb-0 px-5">
          <Bio />
          <Disqus config={disqusConfig} />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head: React.FC<HeadProps> = ({ data }) => {
  const post = data.post

  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    post: markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
