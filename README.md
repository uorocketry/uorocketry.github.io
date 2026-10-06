# Development

The rocketry [website](https://uorocketry.ca) is a jekyll-based site that uses tailwindcss for styling (apart from the index page, which uses SCSS).

Some useful links:
- Jekyll: [Docs](https://jekyllrb.com/docs/), [Templating](https://shopify.github.io/liquid/)
- Tailwindcss: [Docs](https://tailwindcss.com/docs/styling-with-utility-classes), [Jekyll Plugin](https://github.com/vormwald/jekyll-tailwindcss)

## Development environment
Any IDE works, VSCode and derived editors have a tailwindcss plugin which helps with completion.

### Prerequisites
- [Ruby](https://www.ruby-lang.org/en/downloads/) (Currently we use 4.0.7, but recent version should work)

Once Ruby is installed, run `bundle install` in the project folder to install the currently used version of jekyll and all other dependencies.

### Development Server
If you want to see your changes in real time, you can use jekyll's serve feature to host an automatically updating server (on `http://localhost:4000` by default)

```sh
$ jekyll serve --livereload
```