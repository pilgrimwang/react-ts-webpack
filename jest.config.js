module.exports = {
    globals: {
        'ts-jest': {
            isolatedModules: true,
        }
    },
    collectCoverage: true,
    coverageDirectory: "testResult",
    coverageReporters: ["json", "lcov", "text", "clover", "html", "cobertura"],
    moduleDirectories: [
        "node_modules",
        "src"
    ],
    moduleFileExtensions: [
        "js",
        "json",
        "jsx",
        "ts",
        "tsx",
        "node"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.ts",
        "\\.(css|less)$|./styles(.)?(desktop|client|mobile|view)?$": "identity-obj-proxy",
    },
    preset: "ts-jest/presets/js-with-ts",
    rootDir: './',
    setupFiles: ["<rootDir>/tests/setup.ts"]
}