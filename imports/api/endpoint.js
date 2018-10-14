import { Meteor } from 'meteor/meteor';
import { Restivus } from 'meteor/mrest:restivus';
import { Links } from './links'

const Api = new Restivus({
  useDefaultAuth: false,
  prettyJson: true,
});
// GET endpoint for the references
Api.addCollection(Links, {
  excludedEndpoints: ['put', 'post', 'delete'], //exclude methods here
  routeOptions: {
    authRequired: false, 
  },
  // next block, define the endpoint you want to use
  endpoints: {
    get: {
      authRequired: false,
    },
  },
});
const data =  {
    "userId": 1,
    "id": 1,
    "title": "First Item",
    "completed": false
  }
Api.addRoute(
    'data',
    { authRequired: false }, // here you can decide if you want the endpoint to be authenticated with meteor users
    {
      get: {
        action: function() {
          if (data) {
            return { status: 'success', data };
          }
          return {
            statusCode: 400,
            body: { status: 'fail', message: "Error happened, I couldn't fetch the data" },
          };
        },
      },
    },
  );