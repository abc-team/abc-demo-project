module.exports = {
    var: {
        foo: "foo"
    },
    config: {
        log: {
            start: {
                messages: [
                    "Welcome to ABC!"
                ]
            }
        }
    },
    tasks: {
        default: ["log:start"]
    }
}
