# Authentication

![auth](https://daafoor.com/assets/dropzone/uploads/tinymce_images/tutorials/9/150/mceu_58076280611614407363302.png)

1. What is OAuth?

OAuth is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential

2. Give an example of what using OAuth would look like.

The simplest example of OAuth is when you go to log onto a website and it offers one or more opportunities to log on using another website’s/service’s logon. You then click on the button linked to the other website, the other website authenticates you, and the website you were originally connecting to logs you on itself afterward using permission gained from the second website.

3. How does OAuth work? What are the steps that it takes to authenticate the user?

two unrelated sites or services trying to accomplish something on behalf of users or their software. All three have to work together involving multiple approvals for the completed transaction to get authorized.

4. What is OpenID?

OpenID is for humans logging into machines, OAuth is for machines logging into machines on behalf of humans

<br>
<hr>

![0Auth](https://d33wubrfki0l68.cloudfront.net/99bea281c4d8758b97fe07ded0136019b0ed75f6/3da15/assets-jekyll/blog/oauth/oauth-actors-cd8b4861e839037400d8521e97c5d8cf0cb029add65d1036488991c7e85dcb72.png)

## Authentication and Authorization Flows

1. What is the difference between authorization and authentication?
   - **authentication** is the process of verifying who a user is
   - **authorization** is the process of verifying what they have access to.
2. What is Authorization Code Flow?

   it is the way that we make sure that the user is actually is the user who claim is by asking for a validate a credentials like a password and transmits info through an **ID Token**

3. What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?

   the way that allow the user or not through polices and rules and transmits info through an **Access Token**

4. What is Implicit Flow with Form Post?

   which is intended for Public Clients, or applications which are unable to securely store Client Secrets

5. What is Client Credentials Flow?

   - For this scenario, typical authentication schemes like username + password or social logins don't make sense. Instead, M2M apps use the Client Credentials Flow

   - they pass along their Client ID and Client Secret to authenticate themselves and get a token.

6. What is Device Authorization Flow?

   With input-constrained devices that connect to the internet, rather than authenticate the user directly, the device asks the user to go to a link on their computer or smartphone and authorize the device

7. What is Resource Owner Password Flow?

   which requests that users provide credentials (username and password), typically using an interactive form. The Resource Owner Password Flow should only be used when redirect-based flows
