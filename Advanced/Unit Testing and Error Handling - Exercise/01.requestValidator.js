function requestValidator(request) {
    const { method, uri, version, message } = request;

    const uriPattern = / ^([\w.])+$|^\*$ /gm;

    const msgPattern = /^[^<>\\&\'\"]+$/gm;

    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];

    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

    const errorMsg = (typeOfParam) => {
        throw new Error(`Invalid request header: Invalid ${typeOfParam}`);
    };

    if (!validMethods.includes(method) || !method) errorMsg("Method");

    if (!validVersions.includes(version) || !version) errorMsg("Version");

    if (!uriPattern.exec(uri) || !uri) errorMsg("URI");

    if ((!msgPattern.exec(message) && message != "") || !message) errorMsg("Message");

    return request;
}
requestValidator({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
});
