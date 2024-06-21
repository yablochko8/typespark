## Getting started

1. I created a folder in home directory for my scripts:
   `mkdir -p ~/bin`
1. My shell config lives in .zprofile file in home directory, and currently only has one line relating to homebrew, so I opened that in TEXTEDIT which is the coolest text editor...
   `open -e ~/.zprofile`
1. I added as the new first line the following:
   `export PATH="$HOME/bin:$PATH"`
1. Restart Terminal, and confirmed path is updated using:
   `echo $PATH`
1. Opened up ~/bin in VSCode and added a new file called new-app

```bash
#!/bin/bash

echo "we love code and we love"
echo $1
```

Finally - I gave that file permission to be run:
`chmod +x ~/bin/new-app`

I can now run `new-app thing` in shell and echoes back to me love for thing.
