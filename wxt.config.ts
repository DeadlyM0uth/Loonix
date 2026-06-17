import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifest: {
        name: "Loonix",
        short_name: "Loonix",
        description: "An extension that converts Linux to Loonix",
        host_permissions: ["*://*/*"],
        browser_specific_settings: {
            gecko: {
                id: "loonix@deadlymouth",
                strict_min_version: "109.0",
                data_collection_permissions: {
                    required: ["none"],
                },
            },
        },
        permissions: [],
    },
});
