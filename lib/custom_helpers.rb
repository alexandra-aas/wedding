module CustomHelpers
  def javascript_void
    "javascript:void(0)"
  end

  def nav_link(anchor)
    link_to anchor.humanize, javascript_void, class: "nav-link js-nav-link",
      data: { target: "#anchor_#{anchor}" }
  end
end
