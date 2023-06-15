import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Section from "@/components/section"
import Post from "@/components/post"
import { Feature } from "../components/post"
import Project from "@/components/project"
import { MultiProject, ExternalProject } from "../components/project"
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../lib/mdxUtils"
const IndexPage = ({ posts }) => {
  const orderedPosts = posts.sort(
    (a, b) =>
      Number(new Date(b.data.modified)) - Number(new Date(a.data.modified))
  )

  return (
    <>
      <Layout>
        <SEO />
        <div className="grid max-w-full gap-16 auto-rows-auto">
          <div>
            <p className="mt-8 md:mt-4">
              I'm the co-founder and CEO of {" "}
              <a
                className="text-tertiary dark:text-darkTertiary"
                href="https://oleic.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oleic
              </a>
              .
            </p>
          </div>
          <Section title="Contact">
            <div className="flex flex-row self-stretch justify-between sm:justify-start ">
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="mailto:mithil@duck.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="https://twitter.com/mithilproof"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="https://github.com/mithilproof"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="https://dribbble.com/mithilproof/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>

            </div>
          </Section>
          {/* <Section title="Notes" className="flex flex-row">
            <Link
              href="/notes"
              className=" text-tertiary dark:text-darkTertiary group"
              target="_blank"
              rel="noopener noreferrer"
              legacyBehavior
            >
              Explore
            </Link>
            <ArrowExternal />
          </Section> */}
          {/* <Section title="Work">
            <div className="mb-2">
              <Feature
                title={"Merge queues for GitHub Mobile"}
                date={"Coming soon"}
                href={
                  "https://github.blog/changelog/2023-02-08-pull-request-merge-queue-public-beta/"
                }
              />
            </div>
            <div className="mb-2">
              <Feature
                title={"Mobile code editing and pull requests"}
                date={"March 2023"}
                href={
                  "https://github.blog/2023-03-07-file-editing-on-github-mobile-keeps-leveling-up/"
                }
              />
            </div>
            <div className="mb-2">
              <Feature
                title={"Achievements on GitHub Mobile"}
                date={"Jan 2023"}
                href={
                  "https://github.blog/changelog/2023-01-10-achievements-on-github-mobile/"
                }
              />
            </div>
            <div className="mb-2">
              <Feature
                title={"GitHub Activity Feed"}
                date={"June 2022"}
                href={
                  "https://github.blog/changelog/2022-06-21-browse-the-activity-feed-on-github-mobile/"
                }
              />
            </div>
            <div className="mb-2">
              <Feature
                title={"Shortcuts"}
                date={"Jan 2022"}
                href={"https://twitter.com/github/status/1481732836751204354"}
              />
            </div>
          </Section> */}
          {/* <Section title="Features">
            <div className="mb-2">
              <Feature
                title={"Interview with Gavin Nelson, product and icon designer"}
                date={"March 2023"}
                href={
                  "https://manual.withcompound.com/chapters/interview-with-gavin-nelson-product-and-icon-designer"
                }
              />
            </div>
            <div className="mb-2">
              <Feature
                title={
                  "Made with Sketch: How Gavin Nelson puts the icon in iconic"
                }
                date={"May 2022"}
                href={"https://www.sketch.com/blog/gavin-nelson-icon-design/"}
              />
            </div>
            <div className="mb-2">
              <Feature
                title={"Workspaces #136"}
                date={"March 2022"}
                href={"https://www.workspaces.xyz/p/136-gavin-nelson"}
              />
            </div>
          </Section> */}
         {/*  <Section title="Writing">
            {orderedPosts.map((post, key) => {
              return (
                <div className="mb-2">
                  <Post
                    key={key}
                    title={post.data.title}
                    date={post.data.date}
                    href={`${post.filePath.replace(/\.mdx?$/, "")}`}
                  />
                </div>
              )
            })}
          </Section> */}

          {/* <Section title="Projects">
            <div className="mb-4">
              <Project
                link="/highlights"
                title="Highlights"
                description="A feed of passages I’ve highlighted from articles across the web"
              />
            </div>
            <div className="mb-4">
              <MultiProject
                link1="/musicthread/heavy-rotation"
                link2="/musicthread/2022-favorites"
                link3="/musicthread/2021-favorites"
                title1="Heavy Rotation"
                title2="2022 Favorites"
                title3="2021 Favorites"
                description="A collection of what I've been listening to recently"
              />
            </div>
            <ExternalProject
              link="https://gumroad.com/l/dvctd"
              title="Monterey"
              description="A macOS and iOS icon theme"
            />
          </Section> */}
          
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export function getStaticProps() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))

    const { data } = matter(source)

    return {
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
