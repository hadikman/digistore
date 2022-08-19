// import { getSession } from 'next-auth/react';

import About from '../components/pages/about';

function AboutPage() {
  return <About />;
}

// export async function getServerSideProps({ req, res }) {
//   const session = await getSession({ req });
//   console.log(session);

//   return {
//     props: {},
//   };
// }

export default AboutPage;
