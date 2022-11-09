# http-server-lauler1

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/http-server-lauler1)

This project is intended only to learn and test locally HTTP + JS + CSS programming.

## References

- [webcontainers/browser-config](https://developer.stackblitz.com/platform/webcontainers/browser-config)

## Instructions

In order to run this http-server in a Chrome browser in a restricted environment inside a Company, I followed this [link](https://developer.stackblitz.com/platform/webcontainers/browser-config) and disabled all security of the Browser. I know this is not recomended, but this browser is not used for any other purpose.

To edit online using Codeflow:

```url
https://stackblitz.com/~/github.com/lauler1/http-server-lauler1
```

To test using Codeflow:

```url
https://http-server-lauler1--8080.local-credentialless.webcontainer.io/html/index.html
```

> **Note 1:** When running the server in some very secured environment areas (e.g. my company), the browser wont allow to open the TCP port of the application. To solve this, first open the url of the page intended to be accesed in the server (e.g. `https://http-server-lauler1--8080.local-credentialless.webcontainer.io`) in a new tab of the browseramd gve the autorization to open it. After that run the server, now the port can be opened.
> **Note 2:** The server can only be accessed inside the same browser whch is running the server. And if this server chashes you loos all the changes done localy not yet sent to Github.
