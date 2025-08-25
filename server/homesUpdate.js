use journal

// Repairing all home links that go to journal
// TODO: Make dynamic structure

/*
1 -> journals/my-first-entry
2 -> journals/lovin'-me
4 -> journals/we-gon'-be-all-right
5 -> journals/i-am-not-your-negro
6 --> journals/phrases-that-annoy-me
7 --> journals/seandre-2.0
8  -> /journals/free-will
9 -> journals/the-future-refuses-to-change
10 --> journals/my-first-ebook*/

db.homesMaster.updateOne({_id: 1}, {$set: {
    content: `<div><h1>Welcome to my writing/music website!</h1><div>Please check out the <Link to="/journal">Journal</Link> (<a href="journals/my-first-entry">first entry here</a>), <Link to="/poems">Poems</Link>, and <Link to="/about">About Me</Link> sections. All other sections will be coming soon!</div></div>`
}})

db.homesMaster.updateOne({_id: 2}, {$set: {
    content: `<div><p>With the exception of a few breaks, I've been coding for almost two straight days on this update...the first of many more to come! I improved the styling, implemented menus, and I have <a href="/journals/lovin'-me">a new "Journal" entry</a>. Please check it out when you can. I'm gonna go recuperate now.</p></div>`
}})


db.homesMaster.updateOne({_id: 4}, {$set: {
    content: `<div><h3>Happy New Year!</h3><div>This is my first update of 2021. I did a major code update, which elevated my ReactJS knowledge and will make future updates much easier. And I celebrated wtih <a href="journals/we-gon'-be-all-right">a new "Journal" entry</a>. Please check it and enjoy.</div></div>`
}})


db.homesMaster.updateOne({_id: 5}, {$set: {
    content: `<div><h1>Happy Friday and Black History Month!</h1><div>I have <a href='journals/i-am-not-your-negro'>a new journal entry</a>, with my very first image also included! Please check it out, and have a beautiful, black weekend.</div></div>`
}})

db.homesMaster.updateOne({_id: 6}, {$set: {
    content: `<div><p>I know you're just dying to know what they are, right? The only way to find out it to check <a href="journals/phrases-that-annoy-me">my new "Journal" entry</a>. I also justified text on all entries to improve formatting. Happy Saturday.</p></div>`
}})

db.homesMaster.updateOne({_id: 7}, {$set: {
    content: `<div><h1>Major site refactor!</h1><div>Almost six months later, I have finally finished a major site update, implementing NextJS server-side rendering and converting all my styling from less to SCSS. The look and feel should be the same, but now I can share content and expand on this site with full flexibility...starting with directing you to <a href="journals/seandre-2.0">my latest journal entry</a>. Enjoy!</div></div>`
}})

db.homesMaster.updateOne({_id: 8}, {$set: {
    content: `<div><h1>Alive, like Daft Punk</h1><div>It&#39;s been too long since I&#39;ve updated, but I&#39;ve still been writing when I can, and have some things backlogged. It&#39;s been a physically/emotionally taxing week, so I decided to vent the best way I know how, which is writing. Check out my new journal entry, because<a href="journals/free-will">it slaps</a>.</div></div>`
}})

db.homesMaster.updateOne({_id: 9}, {$set: {
    content: `<div><h1>Get in, loser, we're time traveling</h1><div>Well? What are you waiting for? <a href="journals/the-future-refuses-to-change">Hurry up</a> before I leave you behind.</div></div>`
}})

db.homesMaster.updateOne({_id: 10}, {$set: {
    content: `<div><h1>I have published my first book!</h1><div>Click <a href="journals/my-first-ebook">here</a> to make history.</div></div>`
}})
