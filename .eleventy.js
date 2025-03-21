module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("assets");
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
        }
    };
};