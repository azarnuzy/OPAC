// MetaTags.js
import { checkPropTypes } from 'prop-types'
import { Helmet } from 'react-helmet-async'

const MetaTags = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
}) => {
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Description */}
      <meta
        name='description'
        content={description}
      />

      {/* Keywords */}
      {keywords && (
        <meta
          name='keywords'
          content={keywords}
        />
      )}

      {/* Open Graph */}
      <meta
        property='og:title'
        content={ogTitle || title}
      />
      <meta
        property='og:description'
        content={ogDescription || description}
      />
      <meta
        property='og:image'
        content={ogImage}
      />
      <meta
        property='og:type'
        content='website'
      />

      {/* Twitter Card */}
      <meta
        name='twitter:card'
        content='summary_large_image'
      />
      <meta
        name='twitter:title'
        content={ogTitle || title}
      />
      <meta
        name='twitter:description'
        content={ogDescription || description}
      />
      <meta
        name='twitter:image'
        content={ogImage}
      />

      {/* Favicon */}
      <link
        rel='icon'
        type='image/x-icon'
        href='/favicon/favicon.ico'
      />

      {/* Image Link */}
      <link
        rel='image_src'
        href={ogImage}
      />
    </Helmet>
  )
}

export default MetaTags

MetaTags.propTypes = {
  title: checkPropTypes.string,
  description: checkPropTypes.string,
  keywords: checkPropTypes.string,
  ogTitle: checkPropTypes.string,
  ogDescription: checkPropTypes.string,
  ogImage: checkPropTypes.string,
}
