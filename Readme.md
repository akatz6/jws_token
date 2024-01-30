Npm Install

express
bcrypt
jwt
axios

Quick start for prisma
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql

For GitHub Oath
Go to https://github.com/settings/developers
Select New Oath App
For authentication callback, this is where you get the code on the front end
On back end create a .env file for YOUR_CLIENT_ID and YOUR_CLIENT_SECRET

On the front end use https://github.com/login/oauth/authorize?client_id=9f9456b2c360eeab43ef
this will return a url with the code

Then pass that to the back end and use it in

https://github.com/login/oauth/access_token

json
{
"code": "<your code>",
"client_id": "<your client id>",
"client_secret":"<your client secret>",
"redirect_url": "https://localhost:3000"
}

this will return you bearer token.
Then use https://api.github.com/user to get uses info.

To generate a web token for jsonwebtoken
open a new terminal and type "node"
Then type "require('crypto').randomBytes(64).toString('hex')"
This is your WEB_TOKEN add it to you .env file
