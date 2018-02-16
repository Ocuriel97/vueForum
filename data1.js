// A FORUMS IS A GROUPE OF THREADS AND A CATEGORY IS A GROUP OF FORUMS
data = {
  threads: {
    t1: { // KEY - ID FOR INDIVIDUAL THREADS
      key: 't1' // IDENTIFIER - UNIQUE
      title 'my first thread', // TITLE OF THE THREAD
      publishedAt: '', //  THE TIME IT WAS PUBLISHED
      posts: { // THE OBJECT THAT HOLDS THE POSTS UNDER THIS SPEC. THREAD
        p1: 'p1'
      },
      userId: '' // THE UNIQUE USERID - CREATOR OF THE THREAD
    }
  },
  posts: { // A RESPONSE UNDER THE THREAD
  p1: { // KEY NAME - UNIUE
      key: 'p1', // KEY UNIQUE ID
      publishedAt: '', // TIME THE POST WAS PUBLISHED
      userId: '', // USER THAT PUBLISHED POST
      text: 'hi there', // CONTENTS OF POSTS
      threadId: 't1' // THE THREAD THAT THE POST BELONGS TOO
    }
  }, users: {
    u1: {
      name: 'Omar',
      key: 'u1',
      threads: {
        't1'
      },
      posts: {
        'p1'
      }
    }
  },
  forums: {
    f1: {
      key: 'f1',
      name: 'fishing',
      description: '',
      catergoryId: 'c1',
      threads: {
        t1: 't1'
      }
    }
  },
  catergories: {
    c1: {
      hey: 'c1',
      name: 'Discussions',
      forums: {
        f1: 'f1'
      }
    }
  }
}
