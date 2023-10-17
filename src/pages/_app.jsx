import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'

import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'

const navigation = [
  {
    title: 'Introduction',
    links: [
      { title: 'Getting started', href: '/' },
      { title: 'Installation', href: '/installation' },
    ],
  },
  {
    title: 'User Guide',
    links: [
      { title: 'Dashboard', href: '/guide/dashboard' },
      { title: 'POS Screen', href: '/guide/pos-screen' },
      { title: 'Products', href: '/guide/products' },
      { title: 'Categories & Units', href: '/guide/categories-units' },
      { title: 'Customers & Suppliers', href: '/guide/customers-suppliers' },
      { title: 'Sales & Purchases', href: '/guide/sales-purchases' },
      { title: 'Payments & Expenses', href: '/guide/payments-expenses' },
      { title: 'House Keepings', href: '/guide/house-keepings' },
      { title: 'Gift Cards', href: '/guide/gift-cards' },
      { title: 'Taxes', href: '/guide/taxes' },
      { title: 'Users', href: '/guide/users' },
      { title: 'Settings', href: '/guide/settings' },
      { title: 'Alerts & Reports', href: '/guide/alerts-reports' },
    ],
  },
]

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (/^h[23]$/.test(node.name)) {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export { navigation }
export default function App({ Component, pageProps }) {
  let title = pageProps.markdoc?.frontmatter.title

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - SmartPOS Docs`

  let description = pageProps.markdoc?.frontmatter.description

  let tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Layout
        title={title}
        navigation={navigation}
        tableOfContents={tableOfContents}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
