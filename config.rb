page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

require "lib/custom_helpers"
helpers CustomHelpers

configure :development do
  activate :livereload
  activate :i18n
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end
