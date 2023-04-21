# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "Theowyn's Waker Guide"
copyright = ' 2023, Sega'
author = 'Theowyn'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['myst_parser', 'sphinxcontrib.youtube', 'sphinx.ext.githubpages', 'sphinx.ext.todo', 'sphinx_git']
# MyST documentation: https://myst-parser.readthedocs.io/en/latest/

templates_path = ['_templates']
exclude_patterns = []
todo_include_todos = True

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'furo'
# Furo theme documentation: https://pradyunsg.me/furo/
html_theme_options = {
#    "announcement": "<em>Important</em> announcement!",
}
html_static_path = ['_static']
html_title = 'Slayer Guide'
html_favicon = '_static/favicon.ico'
html_js_files = ['https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', 'lazyload.js']
html_css_files = ['lazyload.css']