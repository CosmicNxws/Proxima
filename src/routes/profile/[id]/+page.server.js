// This passes the ID from the URL to the page
export const load = ({ params }) => {
    return {
      userId: params.id 
    };
  };