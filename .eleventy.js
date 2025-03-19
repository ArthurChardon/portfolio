module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/custom.css");
    eleventyConfig.addPassthroughCopy("assets/Slabo13px-Regular.ttf");
    eleventyConfig.addPassthroughCopy("assets/Montserrat-VariableFont_wght.ttf");
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
        }
    };
};