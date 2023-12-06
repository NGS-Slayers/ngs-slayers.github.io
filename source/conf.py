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

templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]
todo_include_todos = True
tippy_anchor_parent_selector = "div.content"
spelling_show_suggestions=True

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "furo"
# Furo theme documentation: https://pradyunsg.me/furo/
html_theme_options = {
#    "announcement": "<em>Important</em> announcement!",
}
html_static_path = ["_static"]
html_title = "Slayer Guide"
html_favicon = "_static/favicon.ico"
html_js_files = ["scripts/lozad.min.js", "scripts/gsap.min.js?v1", "scripts/ScrollTrigger.min.js?v1", "scripts/lazyloadVideos.js?v1" , "scripts/moveset.js?v1.1", "scripts/genTable.js?v1"]
html_css_files = ["cls.css"]