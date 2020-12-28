const config = {
    s3: {
        REGION: "us-east-2",
        BUCKET: "jgordley-notes-app-upload",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://phzbh4n63d.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_dPE5cFr04",
        APP_CLIENT_ID: "69sr1nec5klfi1iah4sa944613",
        IDENTITY_POOL_ID: "us-east-2:6c33493d-c8f3-434d-ba59-90087f673cfd",
    },
};

export default config;