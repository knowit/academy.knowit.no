import * as React from 'react'
import * as css from './program-page.module.scss'
import Layout from 'components/FrontLayout'
import BlogHeader from 'components/BlogHeader'
// import SignupSection from 'components/SignupSection'
import ProgramOverview from 'components/ProgramOverview'
import { useFetchAllPages } from 'hooks/useFetchAllPages'
import { Box, Container, Link, Typography } from '@mui/material'
import SignupSection from '../SignupSection/SignupSection'

const ProgramPage = ({ year, program }) => {
  const data = useFetchAllPages()
  const aboutRe = new RegExp(
    `^/${
      typeof year === 'undefined' ? '' : ''.concat(year, '/')
    }courses/about-${program}`
  )

  const courseRe = new RegExp(`^/courses/${program}`)

  let about = {}
  try {
    about = data.allMarkdownRemark.edges.find((i) =>
      i.node.frontmatter.path.match(aboutRe)
    ).node
  } catch (e) {
    console.error('Did not find about node', e, about)
    about.frontmatter = {}
    about.html = '<p>informasjon mangler</p>'
  }

  // parses the date from frontmatter and tries to correct the most common mistakes
  const makeFrontmatterDate = (front) => {
    if (typeof front.date === 'undefined') return null
    if (front.date instanceof Date) return front.date
    if (typeof front.date !== 'string') return null
    if (front.date.length === 10) return new Date(front.date)
    if (front.date.length === 16)
      return new Date(front.date.split(/[T\s]/i).join('T'))

    throw new TypeError(
      'date field in frontmatter was wrong datestring format. Needs to be YYYY-MM-DDTHH:mm'
    )
  }

  // create a list of all courses for program sorted by date
  const courses = data.allMarkdownRemark.edges
    .filter((i) => !i.node.fileAbsolutePath.match(/pages\/20\d\d/))
    .filter((i) => i.node.frontmatter.path.match(courseRe))
    .map((i) => {
      i.node.frontmatter.date = makeFrontmatterDate(i.node.frontmatter)
      return i
    })
    .sort((a, b) => {
      if (a.node.frontmatter.date === null) return 1
      if (b.node.frontmatter.date === null) return -1
      return a.node.frontmatter.date > b.node.frontmatter.date ? 1 : -1
    })

  about.frontmatter.siteUrl = `https://academy.knowit.no/courses/${program}/`
  // about.frontmatter.path = `/courses/${program}`
  // const aboutPath = `/courses/${program}`

  return (
    <Layout>
      <Container maxWidth="tablet">
        <Box paddingTop={4}>
          <BlogHeader data={about} />
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: about.html }}
          ></Typography>
        </Box>
        {about.frontmatter.application ? (
          <Box sx={{ textAlign: 'right' }}>
            <Link
              target={'_blank'}
              sx={{
                color: css.knowitBlack,
                paddingBottom: '4px',
                borderBottom: `2px solid ${css.knowitLollipop}`,
                textDecoration: 'none',
              }}
              href={about.frontmatter.application}
            >
              Søk om plass
            </Link>
          </Box>
        ) : (
          ''
        )}
        <Box pt={2} pb={8}>
          <ProgramOverview courses={courses} title="Kursoversikt" />
        </Box>
      </Container>
      <SignupSection></SignupSection>
      <Container>
        <Box pb={12}></Box>
      </Container>
    </Layout>
  )
}

export default ProgramPage
