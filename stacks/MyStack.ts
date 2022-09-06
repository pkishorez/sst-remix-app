import {StackContext, Api, RemixSite} from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
  });

  const remixApp = new RemixSite(stack, "remixApp", {
    path: "web/",
    environment: {
      ENDPOINT: api.url
    }
  })
  stack.addOutputs({
    ApiEndpoint: api.url,
    RemixSiteUrl: remixApp.url
  });
}
