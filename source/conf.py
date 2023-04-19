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

extensions = ['myst_parser', 'sphinxcontrib.youtube', 'sphinxcontrib.video', 'sphinx_subfigure', 'sphinx.ext.githubpages', 'sphinx.ext.todo']
# MyST documentation: https://myst-parser.readthedocs.io/en/latest/

templates_path = ['_templates']
exclude_patterns = []

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'furo'
# html_theme = 'sphinx_book_theme'
# Furo theme documentation: https://pradyunsg.me/furo/
# Book theme documentation: https://sphinx-book-theme.readthedocs.io/en/latest/
html_static_path = ['_static']
html_title = 'Slayer Guide'
html_favicon = '_static/UINGSClassSl.ico'

html_theme_options = {
#    "announcement": "<em>Important</em> announcement!",
    "source_repository": "https://github.com/Aikohh/ngs-slayers.github.io",
    "source_branch": "main",
    "source_directory": "source/",
}

todo_include_todos = True