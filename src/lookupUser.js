import fetch from "cross-fetch";

export function lookupUser(user, uri, requestId) {
    return fetch(`${uri}/lookup?user=${user}`,{
        headers: {
            "x-request-id": requestId,
        },
    }).then((res) => {
        if(res.ok) {
            return res.json();
        }
        throw new Error("user not found");
    });
}
