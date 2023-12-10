// List of commands that do not require API calls

import * as bin from './index'
import config from '../../../config.json'

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ')
  var c = ''
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n'
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' '
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`
}

// Redirection
// export const repo = async (args: string[]): Promise<string> => {
//   window.open(`${config.repo}`);
//   return 'Opening Github repository...';
// };

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}.

Welcome to my website! I'm a self-taught software developer passionate about building products
that resonate with both businesses and people. Transforming ideas into innovative solutions.
Since the beginning of my journey as a developer, I have been building intuitive and scalable 
applications, focusing on the user experience. My skills and experience go beyond fullstack development
and data science. 

I also like to design logos and brands visual identities, I did all the design for 
my company Atalaso I had no knowledge or experience at first but I quickly learned, the skills needed
for the job, I love this aspect of the business, and I am excited about the future projects that await me, 
the possibilities and the cool things I'm going to build next.

'sumfetch' - short summary.`
}

// export const resume = async (args: string[]): Promise<string> => {
//   window.open(`${config.resume_url}`);
//   return 'Opening resume...';
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`)
  return `Opening ${config.email}...`
}

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`)

  return 'Opening github...'
}

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`)

  return 'Opening linkedin...'
}

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`)

  return 'Opening linkedin...'
}

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ')
}

export const whoami = async (args: string[]): Promise<string> => {
  return `Who am I? They often tell me,
I come out of my cell
Calmly, cheerfully, resolutely,
Like a lord from his palace.
Who am I? They often tell me,
I used to speak to my warders
Freely and friendly and clearly,
As though it were mine to command.`
}

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`
}

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`
}

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString()
}

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`
}

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`
}

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`
}

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`
}

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=xaBiygfkudk', '_blank') // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `
}

// Banner
export const banner = (args?: string[]): string => {
  return `Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
`
}
