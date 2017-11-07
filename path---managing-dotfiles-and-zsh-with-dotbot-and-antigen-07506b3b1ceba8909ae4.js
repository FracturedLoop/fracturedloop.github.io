webpackJsonp([98870803019946],{"./node_modules/json-loader/index.js!./.cache/json/managing-dotfiles-and-zsh-with-dotbot-and-antigen.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>I\'m gonna be honest here, quite often I would get frustrated with dotfiles. A large part of that frustration was because I never took the time to properly set up my dotfiles, so any time that I would add a new file or make a change, I would have to manually relink files, or put them in the proper place. I finally had enough, so I did some research into the "proper" method of organizing and keeping track of them. What I found was <a href="https://git.io/dotbot">Dotbot</a> for general dotfiles and <a href="http://antigen.sharats.me/">Antigen</a> for managing my ZSH installation.</p>\n<p>I also set up a Github <a href="https://github.com/fracturedloop/dotfiles">repository</a> for my dotfiles. This enables me to easily backup my configuration. Additionally, it makes setup on a new machine <em>incredibly</em> simple; just two commands and I have my custom-tailored terminal and dotfiles. </p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/FracturedLoop/dotfiles.git <span class="token comment"># Clone the repo</span>\ndotfiles/./install <span class="token comment"># Run the install script</span>\n</code></pre>\n      </div>\n<p>So... How do you get started making your own configuration? Firstly, make a folder to store your dotfiles. I would suggest making it in your home (<code>~</code>) directory, and naming it <code>dotfiles</code>. You could also hide the directory if you want by prepending the name with a period (eg. <code>.dotfiles</code>). Then, go ahead and set it up as a git repository (<code>git init</code>), and set it up on Github if you want. Next, we\'ll set up Dotbot. Dotbot is useful even if you don\'t use ZSH. It works with any dotfiles or configuration files/directories. To use Dotbot, we are going to set it up as a submodule to our dotfiles repository. </p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">mkdir</span> dotfiles <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> dotfiles <span class="token comment"># Make a dotfiles folder and change into it</span>\n<span class="token function">git</span> submodule add https://github.com/anishathalye/dotbot <span class="token comment"># Add the Dotbot repo as a submodule</span>\n<span class="token function">cp</span> dotbot/tools/git-submodule/install <span class="token keyword">.</span> <span class="token comment"># Copy the install script to the main dotfiles folder</span>\n<span class="token function">touch</span> install.conf.yaml <span class="token comment"># create a config file for Dotbot</span>\n</code></pre>\n      </div>\n<p>Boring part: done. Now on the the fun part of setting up your own dotfiles. Go ahead and move your current dotfiles into the dotfiles directory. If you want, you can set up subdirectories to group them based on purpose. I, for example, have a folder set up for shell configurations, as well as one set up for linters. Next, open <code>install.conf.yaml</code> in a text editor. This is where your configuration for dotbot will be. Here\'s my config file. We\'ll look at the important aspects of it a bit later. </p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># install.conf.yaml</span>\n<span class="token punctuation">-</span> <span class="token key atrule">defaults</span><span class="token punctuation">:</span>\n    <span class="token key atrule">link</span><span class="token punctuation">:</span>\n      <span class="token key atrule">relink</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n<span class="token punctuation">-</span> <span class="token key atrule">clean</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'~\'</span><span class="token punctuation">]</span>\n\n<span class="token punctuation">-</span> <span class="token key atrule">link</span><span class="token punctuation">:</span>\n    <span class="token comment"># Shell stuff </span>\n    <span class="token key atrule">~/.aliases</span><span class="token punctuation">:</span> shell/.aliases\n    <span class="token key atrule">~/.functions</span><span class="token punctuation">:</span> shell/.functions\n    <span class="token key atrule">~/.zshrc</span><span class="token punctuation">:</span> shell/.zshrc\n    <span class="token comment"># Linters</span>\n    <span class="token key atrule">~/.eslintrc</span><span class="token punctuation">:</span> linters/.eslintrc\n    <span class="token comment"># Git</span>\n    <span class="token key atrule">~/.gitconfig</span><span class="token punctuation">:</span> git/.gitconfig\n    <span class="token key atrule">~/.gitignore</span><span class="token punctuation">:</span> git/.gitignore\n    <span class="token comment"># Apps</span>\n    <span class="token key atrule">~/.hammerspoon</span><span class="token punctuation">:</span> applications/.hammerspoon\n    <span class="token key atrule">~/.zazurc.json</span><span class="token punctuation">:</span> applications/.zazurc.json\n\n<span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token punctuation">[</span>git submodule update <span class="token punctuation">-</span><span class="token punctuation">-</span>init <span class="token punctuation">-</span><span class="token punctuation">-</span>recursive<span class="token punctuation">,</span> Installing submodules<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>The <code>clean</code> section is relatively self explanitory. It will check an array of directories for dead or broken links, and remove them. Here, I have it cleaning out my home folder.</p>\n<p>The <code>link</code> section is where most of the good stuff happens. To setup a link, specify where the symbolic link itself should go, followed by where it should link to. If you want, you could link folders in addition to files. </p>\n<p>The next section that is useful for configuration is the <code>shell</code> section. You can pass the shell section a list of commands to run on install. Optionally, you can pass in an array with the command, as well as a short description that will be displayed as the command is run while executing the install command. In my config, I have it installing/updating submodules. At some point in the future, I may also add another file of terminal commands to run to configure certain parts of my OS.</p>\n<p>Finally is the <code>defaults</code> section. This lets you set default options for other commands. More info about the defaults, as well as additional options for the other commands can be found in the <a href="https://github.com/anishathalye/dotbot/blob/master/README.md">Dotbot readme</a>.</p>\n<p>Now that your Dotbot config is complete, let\'s go ahead and run it. </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>[dotfiles] ./install\nAll targets have been cleaned\nLink exists ~/.hammerspoon -> /Users/josiah/dotfiles/applications/.hammerspoon\nLink exists ~/.functions -> /Users/josiah/dotfiles/shell/.functions\nLink exists ~/.gitconfig -> /Users/josiah/dotfiles/git/.gitconfig\nLink exists ~/.zazurc.json -> /Users/josiah/dotfiles/applications/.zazurc.json\nLink exists ~/.gitignore -> /Users/josiah/dotfiles/git/.gitignore\nLink exists ~/.zshrc -> /Users/josiah/dotfiles/shell/.zshrc\nLink exists ~/.eslintrc -> /Users/josiah/dotfiles/linters/.eslintrc\nLink exists ~/.aliases -> /Users/josiah/dotfiles/shell/.aliases\nAll links have been set up\nInstalling submodules [git submodule update --init --recursive]\nAll commands have been executed\n\n==> All tasks executed successfully\n[dotfiles]</code></pre>\n      </div>\n<p>As you can see, Dotbot is relatively verbose in letting you know what\'s going on. Oh, and that "<code>==> All tasks executed successfully</code>" line at the bottom? That means everything worked, and you are good to go with your dotfiles! If you get an error message instead, I would suggest checking out the <a href="https://github.com/anishathalye/dotbot">Dotbot repo</a> and getting your issues fixed before moving on to the next part. </p>\n<p>And now begins part 2... Configuring ZSH with Antigen. If you don\'t use ZSH as your shell (which you should), this doesn\'t apply to you. If you are one of those people though, I would definitely suggest checking out <a href="http://ohmyz.sh/">Oh My ZSH</a>.</p>\n<p>And now for <a href="http://antigen.sharats.me/">Antigen</a>. Antigen makes managing your ZSH configuration simple. Let\'s look at my config to see how it works. </p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token comment"># .zshrc</span>\nZSH_BASE<span class="token operator">=</span><span class="token variable">$HOME</span>/dotfiles <span class="token comment"># Base directory for ZSH configuration</span>\n\n<span class="token function">source</span> <span class="token variable">$ZSH_BASE</span>/antigen/antigen.zsh <span class="token comment"># Load Antigen</span>\n\n<span class="token function">source</span> ~/.aliases <span class="token comment"># Source some extra files</span>\n<span class="token function">source</span> ~/.functions\n\nantigen use oh-my-zsh <span class="token comment"># Yes, I want to use Oh My ZSH</span>\n\n<span class="token comment"># Terminal stuff</span>\nantigen bundle <span class="token function">git</span>\nantigen bundle zsh-users/zsh-syntax-highlighting\nantigen bundle zsh-users/zsh-history-substring-search\nantigen bundle zsh-users/zsh-autosuggestions\nantigen bundle z\n\n<span class="token comment"># Node stuff</span>\nantigen bundle node\nantigen bundle <span class="token function">npm</span>\n\n<span class="token comment"># Do OS dependant stuff</span>\n<span class="token keyword">case</span> <span class="token variable"><span class="token variable">`</span><span class="token function">uname</span><span class="token variable">`</span></span> <span class="token keyword">in</span>\n  Darwin<span class="token punctuation">)</span>\n    <span class="token comment"># Commands for OS X go here</span>\n    antigen bundle osx\n  <span class="token punctuation">;</span><span class="token punctuation">;</span>\n  Linux<span class="token punctuation">)</span>\n    <span class="token comment"># Commands for Linux go here</span>\n  <span class="token punctuation">;</span><span class="token punctuation">;</span>\nesac\n\n<span class="token comment"># Set the theme</span>\nantigen theme theunraveler\n\n<span class="token comment"># And lastly, apply the Antigen stuff</span>\nantigen apply\n</code></pre>\n      </div>\n<p>That works and is pretty and everything but what does it do? Well... Let\'s give it a look.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>ZSH_BASE<span class="token operator">=</span><span class="token variable">$HOME</span>/dotfiles <span class="token comment"># Base directory for ZSH configuration</span>\n\n<span class="token function">source</span> <span class="token variable">$ZSH_BASE</span>/antigen/antigen.zsh <span class="token comment"># Load Antigen</span>\n\n<span class="token function">source</span> ~/.aliases <span class="token comment"># Source some extra files</span>\n<span class="token function">source</span> ~/.functions\n</code></pre>\n      </div>\n<p>This section just does some basic setup. If you are using a different directory for your dotfiles, changing <code>ZSH_BASE</code> will let everything know where to look for stuff. Then comes the important step of sourcing Antigen. I also sourced some other files that I use for my shell configuration.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>antigen use oh-my-zsh <span class="token comment"># Yes, I want to use Oh My ZSH</span>\n\n<span class="token comment"># Terminal stuff</span>\nantigen bundle <span class="token function">git</span>\nantigen bundle zsh-users/zsh-syntax-highlighting\n<span class="token comment">#...</span>\n</code></pre>\n      </div>\n<p>The <code>antigen use</code> command lets you load a prepackaged library, and in this case, I\'m loading <a href="http://ohmyz.sh/">Oh My ZSH</a>. Oh My ZSH has a bunch of plugins and tweaks that makes ZSH really nice to use, so I would definitely suggest including it. It also includes quite a few <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/themes">themes</a> as well. The <code>bundle</code> command tells Antigen which plugins to load. Oh My ZSH comes with plenty of <a href="https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins">plugins</a> ready for you to include, but Antigen also supports loading plugins from Gtihub repositories as well, as you can see with the <a href="https://github.com/zsh-users/zsh-syntax-highlighting">zsh-syntax-highlighting</a> plugin. The only issue I had, was sometimes you only want a plugin to be included on certain operating systems. This is where the next section comes in. </p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token comment"># Do OS dependant stuff</span>\n<span class="token keyword">case</span> <span class="token variable"><span class="token variable">`</span><span class="token function">uname</span><span class="token variable">`</span></span> <span class="token keyword">in</span>\n  Darwin<span class="token punctuation">)</span>\n    <span class="token comment"># Commands for OS X go here</span>\n    antigen bundle osx\n  <span class="token punctuation">;</span><span class="token punctuation">;</span>\n  Linux<span class="token punctuation">)</span>\n    <span class="token comment"># Commands for Linux go here</span>\n  <span class="token punctuation">;</span><span class="token punctuation">;</span>\nesac\n</code></pre>\n      </div>\n<p>The <code>uname</code> command is used to figure out which OS is running, then the switch case includes the proper bundles for that system. Certainly useful, because for some reason, the macOS specific commands weren\'t running on my linux install. Can\'t imagine why... ¯\\_(ツ)_/¯</p>\n<p>The <code>antigen theme</code> command is used to set which theme is being used for ZSH. Antigen includes all the themes from Oh My ZSH automatically, but if you want to use another one, it can also load other themes as well, just like the <code>bundle</code> command.</p>\n<p>Finally, to actually get the plugins and load them into ZSH, you run <code>antigen apply</code>. This will fetch any bundles that are not already on your system as well.</p>\n<p>Now, when you open your terminal, you should see your custom plugins and theme are applied and working. For further configuration, be sure to check out the <a href="http://antigen.sharats.me/">Antigen</a> website. While you are at it, you may also want to do a bit further reading on <a href="https://github.com/anishathalye/dotbot">Dotbot</a> so you can tweak it and make it work better for you. Lastly, don\'t forget to push your dotfiles to Github so you have a backup, just in case. While you are there, you may also want to star the Dotbot and Antigen repositories to show your appreciation for their authors\' hard work.</p>',frontmatter:{date:"November 06, 2017",path:"/managing-dotfiles-and-zsh-with-dotbot-and-antigen",title:"Managing dotfiles and ZSH with dotbot and antigen"}}},pathContext:{}}}});
//# sourceMappingURL=path---managing-dotfiles-and-zsh-with-dotbot-and-antigen-07506b3b1ceba8909ae4.js.map