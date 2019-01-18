webpackJsonp([0x761be8f68f78],{460:function(s,a){s.exports={data:{markdownRemark:{html:'<p>I had written earlier about using <a href="https://gist.github.com/cobyism/4730490">this tutorial</a> regarding subtree pushing in git to make updating my website easier. Well, that ended up breaking everything and causing some really nasty errors which took me a long time to sort out. I reverted back to my usual build and update process, which looks something like this:</p>\n<ul>\n<li>Write a new post.</li>\n<li>Build a new version of the site on my “dev” branch.</li>\n<li>Copy the contents of the “public” folder (containing the new version of my site) to my desktop in a tmp folder.</li>\n<li>Switch to my master branch, containing the live site code.</li>\n<li>Delete everything in the master branch and drop</li>\n</ul>\n<p>Very slow, and very tedious. The steps above seemed like a good candidate for automation via a bash script, so I decided to give it a go. The script is below:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token shebang important">#!/bin/bash</span>\n<span class="token comment"># Deploy Site Script</span>\n\n<span class="token keyword">echo</span> <span class="token string">"Deploy Website Script"</span>\n<span class="token function">cd</span> ~/_Dev/e-nichols.github.io\n<span class="token variable"><span class="token variable">`</span><span class="token function">git</span> checkout dev<span class="token variable">`</span></span>\n\n<span class="token comment"># echo "Building new site..."</span>\n<span class="token variable"><span class="token variable">`</span>gatsby build<span class="token variable">`</span></span>\n\n<span class="token keyword">echo</span> <span class="token string">"Copying Contents of Public Folder..."</span>\n<span class="token function">cp</span> -a public/ ~/Desktop/tmp_build\n\n<span class="token keyword">echo</span> <span class="token string">"Checking out master branch..."</span>\n<span class="token variable"><span class="token variable">`</span><span class="token function">git</span> checkout master<span class="token variable">`</span></span>\n\n<span class="token keyword">echo</span> <span class="token string">"Deleting Old Build..."</span>\n<span class="token function">rm</span> -r *\n\n<span class="token keyword">echo</span> <span class="token string">"Copying over new site..."</span>\n<span class="token function">cp</span> -a ~/Desktop/tmp_build/* ~/_Dev/e-nichols.github.io/\n\ntimestamp<span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>\n\n<span class="token keyword">echo</span> <span class="token string">"Adding and committing changes..."</span>\n<span class="token variable"><span class="token variable">`</span><span class="token function">git</span> add <span class="token keyword">.</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit -m <span class="token string">"Fresh build at <span class="token variable">$timestamp</span>"</span><span class="token variable">`</span></span>\n\n<span class="token keyword">echo</span> <span class="token string">"Pushing changes to github..."</span>\n<span class="token variable"><span class="token variable">`</span><span class="token function">git</span> push origin master<span class="token variable">`</span></span>\n\n<span class="token keyword">echo</span> <span class="token string">"Cleaning up..."</span>\n<span class="token function">rm</span> -rf ~/Desktop/tmp_build\n\n<span class="token keyword">echo</span> <span class="token string">"Done"</span></code></pre>\n      </div>\n<p>I tested it with a dummy git repo and it ran smoothly. To enable calling it from the terminal, I created a “scripts” folder in my ~/.oh-my-zsh directory and added it to my path. Boom! Automation is great.</p>\n<p>Additionally, I took the time to create some git command aliases in my .zshrc file:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># GIT ALIASES</span>\n<span class="token function">alias</span> gc<span class="token operator">=</span><span class="token string">"git clone"</span>\n<span class="token function">alias</span> co<span class="token operator">=</span><span class="token string">"git checkout"</span>\n<span class="token function">alias</span> gs<span class="token operator">=</span><span class="token string">"git status"</span>\n<span class="token function">alias</span> ga<span class="token operator">=</span><span class="token string">"git add"</span>\n<span class="token function">alias</span> gaa<span class="token operator">=</span><span class="token string">"git add ."</span>\n<span class="token function">alias</span> gcm<span class="token operator">=</span><span class="token string">"git commit -m"</span>\n<span class="token function">alias</span> gpo<span class="token operator">=</span><span class="token string">"git push origin"</span></code></pre>\n      </div>\n<p>Simple timesavers. I added a couple aliases for jumping to certain directories, which provides the same functionality as <a href="https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/jump/jump.plugin.zsh">zsh’s jump plugin</a>.</p>\n<p><a href="https://dotfiles.github.io/">Check out this site</a> if you’re interested with learning more or getting started with dotfiles. A couple hours of research and work will pay dividends down the road.</p>',timeToRead:2,tableOfContents:"",fields:{tagSlugs:["/tags/zsh/","/tags/scripting/","/tags/aliases/"]},frontmatter:{title:"Timesavers with Scripting and Aliases",tags:["Zsh","scripting","aliases"],date:"September 07, 2016",author:{id:"Evan Nichols",bio:"Software Engineer out of NYC writing about programming, web development and more.",avatar:{children:[{__typename:"ImageSharp",responsiveResolution:{src:"/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-c4f5a.jpg",srcSet:"/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-c4f5a.jpg 1x,\n/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-27112.jpg 1.5x,\n/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-f5e46.jpg 2x,\n/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-592c8.jpg 3x"}}]}}}}},pathContext:{slug:"/posts/scripts-and-aliases/"}}}});
//# sourceMappingURL=path---posts-scripts-and-aliases-d05156a54edda0306df4.js.map