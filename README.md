## How to use this tool

1. Create a folder for your scripts. This guide assumes your using a `bin` folder in your home directory, e.g.:
   `mkdir -p ~/bin`
1. Add that folder to your system path. In my case, the easiest way to do this was to edit .zprofile (a type of shell config file) in my home directory. I opened that in a text editor with this command...
   `open -e ~/.zprofile`
   (if that file doesn't exist for you you'll need to find a different way to add to system path)
1. Add this as a new first line to the config file you're editing:
   `export PATH="$HOME/bin:$PATH"`
1. Restart Terminal, and confirm path is updated by trying using:
   `echo $PATH`
1. Open this ~/bin folder in VS Code / Cursor, and clone this repo in Terminal:
   `git clone https://github.com/fractal-bootcamp/lui.shell-scripts`
1. In theory, any file at the top level of this project can be called from Shell. In practice, the only ones I call are `new-app` and `scrape-web`.

You should now be able to run the command `new-app` and have it work. By default, it will store all new projects to `~/fractal-projs/APPS-FROM-SCRIPTS`.

## Troubleshooting

If the command doesn't work, you may need to give the script executable permissions:

`chmod +x ~/bin/new-app`

I can now run `new-app thing` in shell and echoes back to me love for thing.
