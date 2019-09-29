import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../components/layout"

class PostsTemplate extends Component {
    render() {
        const data = this.props.data

        return(
            <Layout>
                <h1>Posts</h1>

                {data.allWordpressPost.edges.map(({node}) => (
                    <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                        <Link to={'post/' + node.slug}>
                            <h3 style={{ marginBottom: 10 }}>{node.title}</h3>
                        </Link>
                        <h4 style={{ marginBottom: 15 }}>{node.date}</h4>

                        <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                        
                    </div>
                ))}

            </Layout>
        )
    }
}

PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`