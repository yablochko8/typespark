## How to use this repo

1. Create a folder in for your scripts. Standard described here will be for a `bin` folder in your home directory:
   `mkdir -p ~/bin`
1. Add that folder to your system PATH. In my case, the easiest way to do this was to edit .zprofile (a type of shell config file) in my home directory. I opened that in a text editor with this command...
   `open -e ~/.zprofile`
1. Add this as a new first line to the config file you're editing:
   `export PATH="$HOME/bin:$PATH"`
1. Restart Terminal, and confirm path is updated by trying using:
   `echo $PATH`
1. Open this /bin folder in VS Code / Cursor, and cloned this repo to ~/bin. In theory, any file at the top level of this project can be called from Shell in th. In practice, the only ones I call are `new-app` and `scrape-web`.

You should now be able to run the command `new-app` and have it work. By default, it will store all new projects to `~/fractal-projs/APPS-FROM-SCRIPTS`.

## Troubleshooting

If the command doesn't work, you may need to give the script executable permissions:

`chmod +x ~/bin/new-app`

I can now run `new-app thing` in shell and echoes back to me love for thing.
