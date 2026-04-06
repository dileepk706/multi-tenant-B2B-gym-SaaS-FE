import { Helmet } from 'react-helmet-async';
// sections

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found!</title>
      </Helmet>
      <h1>not found page</h1>
    </>
  );
}
