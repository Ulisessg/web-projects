/* eslint-disable no-underscore-dangle */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import Document, {
  Head, Html, Main, NextScript, DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import FacebookPixelCode from '../utils/facebookPixel';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <>
        <Html lang={this.props.__NEXT_DATA__.page === '/[blogsInSpanish]' ? 'es' : 'en'} prefix="og: http://ogp.me/ns#">
          <Head />
          <body>
            {/* <!-- Facebook Pixel Code --> */}
            <script dangerouslySetInnerHTML={{
              __html: FacebookPixelCode,
            }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                alt=""
                style={{ display: 'none' }}
                src="https://www.facebook.com/tr?id=1205494516547352&ev=PageView&noscript=1"
              />
            </noscript>
            {/* <!-- End Facebook Pixel Code --> */}
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
