export const load = async ({ params }) => {
    return {
      slug: params.slug // This passes the slug from the URL to your page
    };
  };