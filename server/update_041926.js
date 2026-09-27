db.contentCollection.insertOne({
    isActive: true,
    category: 'journals',
    title: "My Truth",
    date: 260419,
    content: `<h1>"My Truth"</h1><h4>4/19/26 - 7:21PM</h4> <p>I have a recurring segment in my journaling called "Phrases That Annoy  Me". You can check out the previous segments <a href="phrases-that-annoy-me">here</a>.</p> <p>I decided to do  this segment again for this entry, but instead of a series of phrases, I'm focusing this entire entry on one specific  phrase that annoys me: </p> <p>My Truth".</p> <p>I dislike the phrase "my truth". I understand the intention behind it  but I still feel it's a fundamentally bad and misguided phrase.</p> <p>My truth" is akin to "alternative facts", in that it implies that truth is subjective, and that objective, empirical reality is unknowable.  <p>When people say "my  truth", I think what they really mean to (and should) say is "my perspective". Because everyone has different perspectives. And your perspective may or may not align with the truth. But different perspectives don't mean that there is no objective, capital "T" Truth.</p> <p>Two people looking at the moon from opposite sides might say the moon  is both light and dark, and neither of them are wrong or lying. That's perspective.</p> <p>But saying two plus two equals five is not a matter of "my truth" or "your truth", or perspective at all. It's just wrong. Calling that "my truth" doesn't make that <em>the</em> truth.  <p>It would be as silly as saying that "Fire is cold" is "my truth", or "Gravity is fake" is "my truth", to which I would promptly dare you to stick your hand in a fire or jump off of a building.</p>`
})

db.contentCollection.insertOne({
    isActive: true,
    title: `"My Truth"`,
    category: 'homes',
    date: '260419',
    content: `<div>You can't handle the <a href="journals/my-truth">truth</a>.</div>`
})
