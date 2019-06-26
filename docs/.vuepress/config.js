module.exports = {
  title: 'I\'M IM',
  description: 'Just playing around',
  themeConfig: {
    sidebarDepth: 1,
    sidebar: [
      '/',
      ['/code-bucket-list', 'Code bucket list'],
      ['/devtainment', 'Devtainment'],
      ['/ProjectIdeas', 'Project Ideas'],
      {
        title: 'Tech Notes',
        collapsable: false,
        children: [
          ['/techNotes/WordPress', 'WordPress'],
          ['/techNotes/arangojs', 'ArangoJS'],
          ['/techNotes/BeyondCorp', 'BeyondCorp'],
          ['/techNotes/css', 'CSS'],
          ['/techNotes/docker', 'Docker'],
          ['/techNotes/NodeChromeTracing', 'Node Chrome Tracing'],
          ['/techNotes/react', 'React'],
          ['/techNotes/app-starter', 'App Starter']
        ]
      },
      {
        title: 'Book Notes',
        collapsable: false,
        children: [
          ['/bookNotes/20TeamPatterns', '20 Team Patterns'],
          ['/bookNotes/GoogleSREBook', 'Google SRE Book'],
          ['/bookNotes/TAOSA/500lines/10%20an-archaeology-inspired-database', 'TAOSA, 500 Lines, An archaeology inspired DB'],
          ['/bookNotes/TAOSA/Vol1/1%20asterisk', 'TAOSA, Vol1, Asterisk'],
          ['/bookNotes/TAOSA/Vol1/2%20audacity', 'TAOSA, Vol1, Audacity'],
          ['/bookNotes/TAOSA/Vol1/3%20Bash', 'TAOSA, Vol1, Bash'],
          ['/bookNotes/TAOSA/Vol1/4%20Berkly%20DB', 'TAOSA, Vol1, Berkly DB'],
          ['/bookNotes/TAOSA/Vol1/5%20CMake', 'TAOSA, Vol1, CMake'],
          ['/bookNotes/TAOSA/Vol1/6%20Eclipse', 'TAOSA, Vol1, Eclipse'],
          ['/bookNotes/TAOSA/Vol1/7%20Graphite', 'TAOSA, Vol1, Graphite'],
          ['/bookNotes/TAOSA/Vol1/8%20Hadoop', 'TAOSA, Vol1, Hadoop'],
          ['/bookNotes/TAOSA/Vol1/9%20CI', 'TAOSA, Vol1, CI']
        ]
      }
    ]
  }
}