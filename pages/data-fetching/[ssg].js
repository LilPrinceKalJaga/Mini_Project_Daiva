export default function SSG(props) {
  console.log('props', props)
    return <div className="a-full"></div>;
  }
  
  export async function getStaticPaths(context) {
    let data = [];
    const headers = { "app-id": "64190d3fed8159a1880baab4" };
    await fetch("https://dummyapi.io/data/v1/user", { headers })
      .then((response) => response.json())
      .then((response) => {
        data = response.data;
      });
    let paths = [];
  
    if (Array.isArray(data) && data.length > 0) {
      paths = data.map((post) => ({
        params: {
          ssg: `${post.id}`,
        },
      }));
    }
  
    return { paths, fallback: false };
  }
  export async function getStaticProps(context) {
    let data = [];
    const headers = { "app-id": "64190d3fed8159a1880baab4" };
    await fetch("https://dummyapi.io/data/v1/user", { headers })
      .then((response) => response.json())
      .then((response) => {
        data = response.data;
      });
  
    return {
      props: {
        data,
      },
    };
  }
  