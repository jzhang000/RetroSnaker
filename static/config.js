const config = {
    baseUrl: "http://172.18.67.167:32100",
    oidcConfig: {
        authority: "http://172.18.67.167:32002",
        client_id: "Nebula.Identity",
        redirect_uri: "http://172.18.67.109:4200",
        response_type: "id_token token",
        scope: "openid profile api",
        post_logout_redirect_uri: "http://172.18.67.109:4200"
    }
}