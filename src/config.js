const dev = {
    STRIPE_KEY: "pk_test_51I37YwLKL24ksnnqb3znXjzegBywUCtLoQA2H9Gzpj35fVaazL7UOoHkHx2Sf7z8sppxUjmwP6XuiPEUdEca3Bhy00wlJzI36h",
    s3: {
      REGION: "us-east-2",
      BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-8nx0t4rhr5tm"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://36xvnw711k.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_lXCGo9Bxz",
      APP_CLIENT_ID: "149mvbprfur4bc0h1e2qtbhat3",
      IDENTITY_POOL_ID: "us-east-2:d32b95bc-8159-4e6a-8b98-e502e99f1dd7"
    }
  };

  const prod = {
    STRIPE_KEY: "pk_test_51I37YwLKL24ksnnqb3znXjzegBywUCtLoQA2H9Gzpj35fVaazL7UOoHkHx2Sf7z8sppxUjmwP6XuiPEUdEca3Bhy00wlJzI36h",
    s3: {
      REGION: "us-east-2",
      BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1gyqm34dedtjr"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://phzbh4n63d.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_KW5eOt42Z",
      APP_CLIENT_ID: "3ddouc9vi82p1bclri7h5g25cu",
      IDENTITY_POOL_ID: "us-east-2:0c2f5a49-200d-4b21-a886-d73988cf5a09"
    }
  };

  const config = {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    // Default to dev if not set
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
  };

  export default config;