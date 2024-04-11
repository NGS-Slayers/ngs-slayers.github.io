from datetime import date

# Configuration file for the Sphinx documentation builder._build
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "Theowyn's Waker Guide"
copyright = f"{date.today().year}, Sega"
author = "Theowyn"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ["myst_parser", "sphinx.ext.githubpages", "sphinxcontrib.spelling", "sphinx.ext.todo", "sphinx_git", "sphinx_tippy"]
myst_enable_extensions = ["attrs_block", "deflist", "colon_fence"]
myst_heading_anchors = 3
# MyST documentation: https://myst-parser.readthedocs.io/en/latest/

exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]
todo_include_todos = True
tippy_anchor_parent_selector = "article.bd-article"
spelling_show_suggestions=True

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "sphinx_book_theme"
# Theme documentation: https://sphinx-book-theme.readthedocs.io
html_theme_options = {
    "repository_url": "https://github.com/NGS-Slayers/ngs-slayers.github.io",
    "use_repository_button": True,
    "use_issues_button": True,
}
html_static_path = ["_static"]
html_title = "Slayer Guide"
html_favicon = "_static/favicon.ico"
html_js_files = ["scripts/moveset.js?v1.8", "scripts/genTable.js?v1.2", "scripts/autoplay.js?v1.6", "scripts/table-wrapper.js?v1.1"]
html_css_files = ["scripts/custom.css?v1"]
html_last_updated_fmt = ""