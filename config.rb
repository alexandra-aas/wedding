page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

require "lib/custom_helpers"
helpers CustomHelpers

activate :i18n

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end
