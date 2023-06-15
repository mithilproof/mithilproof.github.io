import React from "react"
import Layout from "@/components/layout"
import SEO from "@/components/seo"

const Colophon = () => (
  <Layout>
    <SEO
      title="Colophon"
      og="colophonog.png"
      description="The making of this website."
    />

    <div className="flex flex-col items-start justify-center h-screen -mt-16 md:-mt-32">
      <h1 className="mb-4">Colophon</h1>

      <p className="mb-4">
        This website is designed and developed by Mithil Verma. The source code of this is availible on{" "}
        <a
          href="https://github.com/mithilproof"
          target="_black"
          rel="noopener noreferrer"
        >
          GitHub.
        </a>
      </p>
      <p className="mb-4">
        It is forked from the original repository of Gavin Nelson that can also be found on{" "}
        <a
          href="https://github.com/gavinmn/nelson.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub.
        </a>
      </p>
      </div>
  </Layout>
)

export default Colophon
