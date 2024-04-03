# LaTeX commands in properties

A simple plugin that enables the execution of LaTeX commands in frontmatter 
properties.


## Features

This plugin support for a `latex-commands` key in frontmatter properties. This 
key contains a list of latex commands that are executed when the file is opened.

These commands are executed silently, and LaTeX formulas are not displayed. For 
this reason, the recommended use is for creating new commands with 
`\newcommand`.
