// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'ev3dy3ggij'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // DONE
  domain: 'dev-fw6kvb8076nshdcm.us.auth0.com',            // Auth0 domain
  clientId: 'RyUEeoDiVhhyyxT6DX4mB5RK7gd8Zntg',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
